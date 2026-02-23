import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/booking.modal";
import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PATCH(request, { params }) {
  const { id } = params;
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

    const booking = await Booking.findById(id).populate("propertyId");
    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // Allow cancelling if user is the booker, or the host of the property, or admin
    const isBooker = booking.userId.toString() === decoded.id;
    const isHost = booking.propertyId.hostId.toString() === decoded.id;
    const isAdmin = decoded.role === "admin";

    if (!isBooker && !isHost && !isAdmin) {
      return NextResponse.json(
        { error: "Forbidden: Cannot cancel this booking" },
        { status: 403 },
      );
    }

    booking.status = "cancelled";
    await booking.save();

    return NextResponse.json(
      { message: "Booking cancelled successfully", booking },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error cancelling booking:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
