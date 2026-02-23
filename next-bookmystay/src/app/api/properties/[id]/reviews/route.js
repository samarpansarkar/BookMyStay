import dbConnect from "@/lib/dbConnect";
import Review from "@/models/review.modal";
import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request, { params }) {
  const { id } = params; // propertyId
  try {
    await dbConnect();
    const reviews = await Review.find({ propertyId: id })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request, { params }) {
  const { id } = params; // propertyId
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
    const { rating, comment } = body;

    if (!rating || !comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Optional: we can check if the user has actually booked this property and their status is "completed"

    const newReview = await Review.create({
      propertyId: id,
      userId: decoded.id,
      rating,
      comment,
    });

    return NextResponse.json({ review: newReview }, { status: 201 });
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
