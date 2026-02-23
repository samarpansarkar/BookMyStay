import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    capacity: { type: Number, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    hostId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

let Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
