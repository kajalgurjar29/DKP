import { genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

//user register as member
export async function register(req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // Create new user with default role 'Member'
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: "Guild Leader",
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
}


//all data here
