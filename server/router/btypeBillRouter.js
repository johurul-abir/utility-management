import express from "express";
import {
  crateBtypeBill,
  deleteBills,
  getAllActiveBills,
  getAllBtypeBills,
  sentBillMsg,
} from "../controler/btypeBillController.js";

const router = express.Router();
router.post("/", crateBtypeBill);
router.get("/", getAllBtypeBills);
router.delete("/:id", deleteBills);
router.patch("/sendmsg/:id", sentBillMsg);
router.get("/activebills", getAllActiveBills);

// router.get("/:id", getSingleBill);

//export default
export default router;
