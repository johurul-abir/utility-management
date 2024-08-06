import express from "express";
import {
  cratePayment,
  deletePayment,
  getPayment,
  getUserPayment,
  allPaidRuningUsers,
  getRuningDueUsers,
  last12MonthDueUsers,
  More6MonthDueUsers,
  More12MonthDueUsers,
} from "../controler/paymentController.js";
import tokenVeryfiy from "../middleware/tokenVerify.js";

const router = express.Router();

router.post("/", cratePayment);
router.get("/", getPayment);
router.get("/user", tokenVeryfiy, getUserPayment);
router.delete("/:id", deletePayment);
router.get("/allruningpaiduser", allPaidRuningUsers);
router.get("/getruningdueusers", getRuningDueUsers);
router.get("/last12monthdueusers", last12MonthDueUsers);
router.get("/more-6month-due-users", More6MonthDueUsers);
router.get("/more-12month-due-users", More12MonthDueUsers);

//export default
export default router;
