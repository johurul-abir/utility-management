import express from "express";
import {
  SeeAllUserDueBillInAdmin,
  SeeAllUserPaymentBillInAdmin,
  crateBtypeBill,
  deleteBills,
  getAllActiveBills,
  getAllBtypeBills,
  getAllDueBills,
  getAllPaidBills,
  payBills,
  sentBillMsg,
} from "../controler/btypeBillController.js";
import tokenVeryfiy from "../middleware/tokenVerify.js";

const router = express.Router();
router.post("/", crateBtypeBill);
router.get("/", getAllBtypeBills);
router.get("/duebills", tokenVeryfiy, getAllDueBills);
router.get("/paidbills", tokenVeryfiy, getAllPaidBills);

router.delete("/:id", deleteBills);
router.patch("/sendmsg/:id", sentBillMsg);
router.get("/activebills", getAllActiveBills);

router.patch("/paybill/:id", payBills);

router.get("/seeuserpaidbills/:id", SeeAllUserPaymentBillInAdmin);
router.get("/seeuserduebills/:id", SeeAllUserDueBillInAdmin);

// router.get("/:id", getSingleBill);

//export default
export default router;
