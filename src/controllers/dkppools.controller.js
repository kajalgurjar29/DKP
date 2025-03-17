// controllers/poolController.js
import Pool from "../models/dkpPools.model.js";

//Create The DKP pool FOr the Added rules
export async function createPool(req, res) {
  try {
    const pool = new Pool(req.body);
    await pool.save();
    res.status(201).json(pool);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//Get all The DKP pool FOr the Added rules
export async function getPools(req, res) {
  try {
    const pools = await Pool.find().populate("createdBy assignedUser");
    res.status(200).json(pools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//get By id  The DKP pool FOr the Added rules
export async function getPoolById(req, res) {
  try {
    const pool = await Pool.findById(req.params.id).populate(
      "createdBy assignedUser"
    );
    if (!pool) return res.status(404).json({ message: "Pool not found" });
    res.status(200).json(pool);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Upadte The DKP pool FOr the Added rules
export async function updatePool(req, res) {
  try {
    const pool = await Pool.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pool) return res.status(404).json({ message: "Pool not found" });
    res.status(200).json(pool);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//Delete The DKP pool FOr the Added rules
export async function deletePool(req, res) {
  try {
    const pool = await Pool.findByIdAndDelete(req.params.id);
    if (!pool) return res.status(404).json({ message: "Pool not found" });
    res.status(200).json({ message: "Pool deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
