import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

router.post("/addEvents", createEvent);
router.get("/getEvents", getAllEvents);
router.get("/getEvents/:id", getEventById);
router.put("/UpdateEvents/:id", updateEvent);
router.delete("/deleteEvents/:id", deleteEvent);

export default router;
