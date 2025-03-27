// models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "Raid Leader",
        "PvP Squad Leader",
        "Resource Manager",
        "Member",
        "Guild Leader",
      ],
      default: "Member",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
