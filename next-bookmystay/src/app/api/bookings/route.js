import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/booking.modal";
import Property from "@/models/property.modal";
import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    await dbConnect();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    let bookings;

    // If Admin, they see all bookings (or maybe paginate this in the future)
    if (decoded.role === "admin") {
      bookings = await Booking.find({})
        .populate("propertyId", "title location pricePerNight")
        .populate("userId", "name email");
    }
    // If Host, they see bookings for their properties
    else if (decoded.role === "host") {
      const hostProperties = await Property.find({ hostId: decoded.id }).select(
        "_id",
      );
      const propertyIds = hostProperties.map((p) => p._id);
      bookings = await Booking.find({ propertyId: { $in: propertyIds } })
        .populate("propertyId", "title location pricePerNight")
        .populate("userId", "name email");
    }
    // If Customer, they see their own bookings
    else {
      bookings = await Booking.find({ userId: decoded.id }).populate(
        "propertyId",
        "title location pricePerNight",
      );
    }

    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
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
    if (!decoded) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { propertyId, checkInDate, checkOutDate, guests, totalPrice } = body;

    if (
      !propertyId ||
      !checkInDate ||
      !checkOutDate ||
      !guests ||
      !totalPrice
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Optional: verify the property exists and has capacity, dates are available, etc.
    const property = await Property.findById(propertyId);
    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }

    const newBooking = await Booking.create({
      propertyId,
      userId: decoded.id,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
      status: "pending", // Initial status
    });

    return NextResponse.json({ booking: newBooking }, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
