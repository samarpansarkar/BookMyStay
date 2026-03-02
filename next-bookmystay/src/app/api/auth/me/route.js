import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSession } from "@/lib/sessions";
import { getUserById } from "@/lib/users";

export async function GET() {
  try {
    const c = cookies();
    const token = c.get("session")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const sess = getSession(token);
    if (!sess) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }

    const user = await getUserById(sess.userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const obj = user.toObject ? user.toObject() : user;
    const { passwordHash, __v, ...publicUser } = obj;
    return NextResponse.json(publicUser);
  } catch (err) {
    console.error("me error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
