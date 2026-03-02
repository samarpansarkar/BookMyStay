import { NextResponse } from "next/server";
import crypto from "crypto";
import { findUserByEmail, addUser, hashPassword } from "@/lib/users";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password, role } = body;

    if (!firstName || !lastName || !email || !password || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const existing = await findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 },
      );
    }

    const passwordHash = hashPassword(password);
    const userData = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      passwordHash,
      role,
      // createdAt will default to now in schema
    };

    const created = await addUser(userData);
    // mongoose returns a document; convert to plain object
    const obj = created.toObject();
    const { passwordHash: _, __v, ...publicUser } = obj;
    return NextResponse.json(publicUser, { status: 201 });
  } catch (err) {
    console.error("register error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
