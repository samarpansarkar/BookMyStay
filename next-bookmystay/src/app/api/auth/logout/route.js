import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/sessions";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const c = cookies();
    const token = c.get("session")?.value;
    if (token) {
      deleteSession(token);
    }

    const res = NextResponse.json({ success: true });
    res.cookies.set("session", "", { path: "/", maxAge: 0 });
    return res;
  } catch (err) {
    console.error("logout error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
