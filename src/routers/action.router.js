import express from "express";
import {
  createAction,
  getActions,
  getActionById,
  updateAction,
  deleteAction,
} from "../controllers/action.controller.js";

const router = express.Router();

router.post("/createAction", createAction);
router.get("/getAction", getActions);
router.get("/getAction/:id", getActionById);
router.put("/updateAction/:id", updateAction);
router.delete("/deleteAction/:id", deleteAction);

export default router;
