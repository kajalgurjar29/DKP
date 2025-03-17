import mongoose from "mongoose";

const ActionSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    bidsWinnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    finalBid: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Action = mongoose.model("Action", ActionSchema);

export default Action;
