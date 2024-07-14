import express from "express";
import {
  cratePayment,
  deletePayment,
  getPayment,
  getUserPayment,
} from "../controler/paymentController.js";
import tokenVeryfiy from "../middleware/tokenVerify.js";

const router = express.Router();

router.post("/", cratePayment);
router.get("/", getPayment);
router.get("/user", tokenVeryfiy, getUserPayment);
router.delete("/:id", deletePayment);

//export default
export default router;
