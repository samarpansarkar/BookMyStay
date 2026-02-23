import dbConnect from "@/lib/dbConnect";
import Property from "@/models/property.modal";
import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await dbConnect();
    const property = await Property.findById(id).populate(
      "hostId",
      "name email",
    );
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    await dbConnect();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded || (decoded.role !== "host" && decoded.role !== "admin")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }

    if (decoded.role !== "admin" && property.hostId.toString() !== decoded.id) {
      return NextResponse.json(
        { error: "Forbidden: Not the owner" },
        { status: 403 },
      );
    }

    const body = await request.json();
    const updatedProperty = await Property.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json({ property: updatedProperty }, { status: 200 });
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await dbConnect();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded || (decoded.role !== "host" && decoded.role !== "admin")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }

    if (decoded.role !== "admin" && property.hostId.toString() !== decoded.id) {
      return NextResponse.json(
        { error: "Forbidden: Not the owner" },
        { status: 403 },
      );
    }

    await Property.findByIdAndDelete(id);
    return NextResponse.json({ message: "Property deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
