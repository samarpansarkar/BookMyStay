import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { mockUsers } from "../signup/route"; // Correctly import the mock DB from the sibling folder

// Create some default users so we can test immediately without signing up
// Realistically, you would seed your database for Admin / Host testing.
if (mockUsers.length === 0) {
  // Generate a default password 'password123' for testing
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("password123", salt);

  // Default Admin
  mockUsers.push({
    id: "admin_1",
    name: "System Admin",
    email: "admin@bookmystay.com",
    password: hash,
    role: "admin",
  });
  // Default Host
  mockUsers.push({
    id: "host_1",
    name: "Property Owner",
    email: "host@bookmystay.com",
    password: hash,
    role: "host",
  });
  // Default Customer
  mockUsers.push({
    id: "cust_1",
    name: "John Traveler",
    email: "user@bookmystay.com",
    password: hash,
    role: "customer",
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Find the user by email
    const user = mockUsers.find((u) => u.email === email);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Verify the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Generate the JWT token payload containing role and identifying info
    const token = await signToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    // Set token cookie
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    // Send back user data
    return NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
