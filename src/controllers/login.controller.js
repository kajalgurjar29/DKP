import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/user.model.js";
import { compare, genSalt, hash } from "bcrypt";
import sendEmail from "../utils/emailService.js";

//login function for all type of user
export async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Ensure the user has a valid password stored
    if (!user.password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h",
    });

    // Send a secure response (avoid sending full user object)
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}

const otpStore = new Map();
// Store OTPs temporarily (or use a database)
export async function forgotPassword(req, res) {
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exist" });
    }

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

    // Store OTP (temporary map or database)
    otpStore.set(email, { otp, expiresAt });

    // Send OTP via email
    const subject = "Your Password Reset OTP";
    const text = `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`;

    await sendEmail(email, subject, text);

    res.json({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("Forgot Password Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}

// Reset Password (Verify OTP & Update Password)
export async function resetPassword(req, res) {
  const { email, otp, newPassword } = req.body;

  try {
    // Check if OTP exists and is valid
    const otpData = otpStore.get(email);
    if (!otpData || otpData.otp !== otp || Date.now() > otpData.expiresAt) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Remove OTP after use
    otpStore.delete(email);

    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = await hash(newPassword, saltRounds);

    // Update password in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password reset successful. You can now log in." });
  } catch (err) {
    console.error("Reset Password Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}

// Change Password
export async function changePassword(req, res) {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user.id; // Extract user ID from authenticated request

  try {
    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Validate old password
    const isMatch = await compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Old password is incorrect" });
    }

    // Hash new password
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);

    // Update password in DB
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("Change Password Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}
