const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "host", "admin"], default: "user" },
  },
  {
    timestamps: true,
  },
);

let User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
