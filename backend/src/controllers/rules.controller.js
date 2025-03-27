import Rule from "../models/rules.model.js";

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Create Rule For DKP
export const createRule = async (req, res) => {
  try {
    const { ruleDescription, dkpPoints } = req.body;
    const newRule = new Rule({ ruleDescription, dkpPoints });
    await newRule.save();
    res.status(201).json({
      success: true,
      message: "Rule created successfully",
      data: newRule,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create rule", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Get All Rules
export const getRules = async (req, res) => {
  try {
    const rules = await Rule.find();
    res.status(200).json({ success: true, data: rules });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch rules", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Get Rule by ID
export const getRuleById = async (req, res) => {
  try {
    const rule = await Rule.findById(req.params.id);
    if (!rule)
      return res
        .status(404)
        .json({ success: false, message: "Rule not found" });
    res.status(200).json({ success: true, data: rule });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch rule", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Update Rule
export const updateRule = async (req, res) => {
  try {
    const updatedRule = await Rule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedRule)
      return res
        .status(404)
        .json({ success: false, message: "Rule not found" });
    res.status(200).json({
      success: true,
      message: "Rule updated successfully",
      data: updatedRule,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update rule", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Delete Rule
export const deleteRule = async (req, res) => {
  try {
    const deletedRule = await Rule.findByIdAndDelete(req.params.id);
    if (!deletedRule)
      return res
        .status(404)
        .json({ success: false, message: "Rule not found" });
    res
      .status(200)
      .json({ success: true, message: "Rule deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete rule", error });
  }
};
