import express from "express";
import {
  login,
  forgotPassword,
  resetPassword,
  changePassword,
} from "../controllers/login.controller.js";
import authMiddleware from "../middleware/auth.middleware.js"; // Middleware to verify JWT
import verifyAPIKey from "../middleware/verifyAPIKey.js";

const router = express.Router();

router.post("/login", verifyAPIKey, login);
router.post("/forgot-password", verifyAPIKey, forgotPassword);
router.post("/reset-password", verifyAPIKey, resetPassword);
router.post("/change-password", verifyAPIKey, authMiddleware, changePassword);

export default router;
