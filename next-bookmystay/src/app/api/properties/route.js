import dbConnect from "@/lib/dbConnect";
import Property from "@/models/property.modal";
import { verifyToken } from "@/lib/auth"; // You may need to create or verify this logic exists
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    await dbConnect();
    // In the future, add query params for parsing filtering/search here
    const properties = await Property.find({}).populate("hostId", "name email");
    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded || (decoded.role !== "host" && decoded.role !== "admin")) {
      return NextResponse.json(
        { error: "Forbidden: Only hosts can create properties" },
        { status: 403 },
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      location,
      pricePerNight,
      capacity,
      amenities,
      images,
    } = body;

    if (!title || !description || !location || !pricePerNight || !capacity) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const newProperty = await Property.create({
      title,
      description,
      location,
      pricePerNight,
      capacity,
      amenities: amenities || [],
      images: images || [],
      hostId: decoded.id, // ID from the token
    });

    return NextResponse.json({ property: newProperty }, { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
