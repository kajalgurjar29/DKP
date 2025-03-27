// routes/userRoutes.js
import express from "express";
import { register } from "../controllers/user.controller.js";
import verifyAPIKey from "../middleware/verifyAPIKey.js";

const router = express.Router();

// Route for user registration
router.post("/register", verifyAPIKey, register);

export default router;
