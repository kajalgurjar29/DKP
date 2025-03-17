import Action from "../models/action.model.js";

// Create Action
export const createAction = async (req, res) => {
  try {
    const {
      itemName,
      description,
      eventId,
      bidsWinnerId,
      finalBid,
      created_at,
    } = req.body;
    const newAction = new Action({
      itemName,
      description,
      eventId,
      bidsWinnerId,
      finalBid,
      created_at,
    });
    await newAction.save();
    res.status(201).json({
      success: true,
      message: "Action created successfully",
      data: newAction,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create Action", error });
  }
};

// Get All Actions
export const getActions = async (req, res) => {
  try {
    const Actions = await Action.find();
    res.status(200).json({ success: true, data: Actions });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch Actions", error });
  }
};

// Get Action by ID
export const getActionById = async (req, res) => {
  try {
    const action = await Action.findById(req.params.id); // ✅ Use a different variable name
    if (!action) {
      return res
        .status(404)
        .json({ success: false, message: "Action not found" });
    }
    res.status(200).json({ success: true, data: action });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch Action", error });
  }
};


// Update Action
export const updateAction = async (req, res) => {
  try {
    const updatedAction = await Action.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedAction)
      return res
        .status(404)
        .json({ success: false, message: "Action not found" });
    res.status(200).json({
      success: true,
      message: "Action updated successfully",
      data: updatedAction,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update Action", error });
  }
};

// Delete Action
export const deleteAction = async (req, res) => {
  try {
    const deletedAction = await Action.findByIdAndDelete(req.params.id);
    if (!deletedAction)
      return res
        .status(404)
        .json({ success: false, message: "Action not found" });
    res
      .status(200)
      .json({ success: true, message: "Action deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete Action", error });
  }
};
