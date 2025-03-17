import express from "express";
import {
  createRule,
  getRules,
  getRuleById,
  updateRule,
  deleteRule,
} from "../controllers/rules.controller.js";
import verifyAPIKey from "../middleware/verifyAPIKey.js";
const router = express.Router();

router.post("/createRole",verifyAPIKey, createRule);
router.get("/GetAllRule", verifyAPIKey, getRules);
router.get("/GetRuleById/:id",verifyAPIKey, getRuleById);
router.put("/UpadteRole/:id", verifyAPIKey, updateRule);
router.delete("/deleteRule/:id",verifyAPIKey, deleteRule);

export default router;
