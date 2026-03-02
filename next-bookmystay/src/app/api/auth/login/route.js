import { NextResponse } from "next/server";
import { findUserByEmail, verifyPassword } from "@/lib/users";
import { createSession } from "@/lib/sessions";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const user = await findUserByEmail(email);
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const token = createSession(user.id); // mongoose virtual id
    const res = NextResponse.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    });

    // set httpOnly cookie
    res.cookies.set("session", token, { httpOnly: true, path: "/" });
    return res;
  } catch (err) {
    console.error("login error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
