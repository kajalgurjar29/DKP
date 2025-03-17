import express from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileManagement.controller.js";

const router = express.Router();

router.get("/getProfile/:id", getProfile); // Get user profile
router.put("/updateProfile/:id", updateProfile); // Update user profile
router.delete("/deleteProfile/:id", deleteProfile); // Delete user profile

export default router;
