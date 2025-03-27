import Event from "../models/event.model.js";

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { eventName, type, poolId, guidName, participants, confirm } =
      req.body;
    const newEvent = new Event({
      eventName,
      type,
      poolId,
      guidName,
      participants,
      confirm,
    });
    await newEvent.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Event created successfully",
        data: newEvent,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create event", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Get All Events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch events", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Get Event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch event", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvent)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    res
      .status(200)
      .json({
        success: true,
        message: "Event updated successfully",
        data: updatedEvent,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update event", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete event", error });
  }
};
