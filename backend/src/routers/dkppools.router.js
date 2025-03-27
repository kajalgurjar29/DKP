// routes/poolRoutes.js
import express from "express";

const router = express.Router();
import {
  createPool,
  getPools,
  getPoolById,
  updatePool,
  deletePool,
} from "../controllers/dkppools.controller.js";
import verifyAPIKey from "../middleware/verifyAPIKey.js";

router.post("/createPool", verifyAPIKey, createPool);
router.get("/getAllPools", verifyAPIKey, getPools);
router.get("/getPool/:id", verifyAPIKey, getPoolById);
router.put("/updatePool/:id", verifyAPIKey, updatePool);
router.delete("/deletePool/:id", verifyAPIKey, deletePool);

export default router;
