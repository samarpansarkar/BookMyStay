import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { timestamps: true },
);

let Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
