import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  poolId: {
    type: String,
    required: true,
  },
  guidName: {
    type: String,
    required: true,
  },
  participants: {
    type: [String],
    required: true,
  },
  confirm: {
    type: [String],
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
