import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin", "owner"], default: "customer" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default models.User || model("User", userSchema);
