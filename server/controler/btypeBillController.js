import asyncHandler from "express-async-handler";
import BtypeBill from "../model/btypeBillSchema.js";
import Payment from "../model/Paymet.js";
import User from "../model/userSchema.js";
import { BillNotificationMail } from "../emails/billsNotification.js";

/**
 *
 * @description get all btype bills
 * @method GET
 * @route api/v1/btypebill
 * @access public
 */
export const getAllBtypeBills = asyncHandler(async (req, res) => {
  const data = await BtypeBill.find().populate("users");
  res
    .status(200)
    .json({ btypebills: data, message: "All student get successfull" });
});

/**
 *
 * @description create btypebill
 * @method POST
 * @route api/v1/btypebill
 * @access public
 */
export const crateBtypeBill = asyncHandler(async (req, res) => {
  //get student data
  const {
    billdate,
    expire,
    gass,
    electricity,
    water,
    internalfacilities,
    safety,
    commonmitter,
    generator,
    garage,
    mosjid,
    staf,
  } = req.body;

  const total =
    Number(req.body.gass) +
    Number(req.body.electricity) +
    Number(req.body.water) +
    Number(req.body.internalfacilities) +
    Number(req.body.safety) +
    Number(req.body.commonmitter) +
    Number(req.body.generator) +
    Number(req.body.garage) +
    Number(req.body.mosjid) +
    Number(req.body.staf);

  //check billdate
  const checkDate = await BtypeBill.findOne({ billdate });
  if (checkDate) {
    return res.status(400).json({ message: "This bill already Created" });
  }

  const data = await BtypeBill.create({
    billdate,
    gass,
    electricity,
    water,
    internalfacilities,
    safety,
    commonmitter,
    generator,
    garage,
    mosjid,
    staf,
    total: total,
    expire,
  });

  res.status(200).json({ bill: data, message: "New bill create successfull" });
});

/**
 *
 * @description Delete btypebill
 * @method DELETE
 * @route api/v1/btypebill
 * @access public
 */

export const deleteBills = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deldata = await BtypeBill.findByIdAndDelete(id);
  res.status(200).json({ delete: deldata, message: "Delete successfull" });
});

/**
 *
 * @description get all active bills
 * @method GET
 * @route api/v1/btypebill/activebills
 * @access public
 */
export const getAllActiveBills = asyncHandler(async (req, res) => {
  const data = await BtypeBill.find({ activebill: true });
  res
    .status(200)
    .json({ activebills: data, message: "get all active bill successfull" });
});

/**
 *
 * @description get all Due bills
 * @method GET
 * @route api/v1/btypebill/duebills
 * @access public
 */
export const getAllDueBills = asyncHandler(async (req, res) => {
  const paymentUser = await Payment.find()
    .where("users")
    .in([req.loginuser?._id]);

  const bills = paymentUser.map((item) => {
    return item.btypebills;
  });

  if (!bills) {
    return res.status(400).json({ message: "Data not found" });
  }

  const data = await BtypeBill.find({ activebill: true })
    .where("_id")
    .nin(bills);
  res
    .status(200)
    .json({ duebills: data, message: "All student get successfull" });
});

/**
 *
 * @description get all paid bills
 * @method GET
 * @route api/v1/btypebill/duebills
 * @access public
 */
export const getAllPaidBills = asyncHandler(async (req, res) => {
  const response = await Payment.find().where("users").in([req.loginuser?._id]);

  const bills = response.map((item) => {
    return item.btypebills;
  });

  if (!bills) {
    return res.status(400).json({ message: "Data not found" });
  }

  const data = await BtypeBill.find({ activebill: true })
    .where("_id")
    .in(bills);

  res.status(200).json({ paidbills: data });
});

/**
 *
 * @description sentBill to user email
 * @method get
 * @route api/v1/btypebill/blsms
 * @access public
 */

export const sentBillMsg = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { activebill } = req.body;

  const user = await User?.find();

  const userId = user.map((item, index) => {
    return item._id;
  });

  const update = await BtypeBill.findByIdAndUpdate(
    id,
    { activebill: true },
    { new: true }
  );

  if (update) {
    const addbill = user.map((item, index) => {
      return (user = { ...item, allbills: [...item, id] });
    });
  }

  // const userEmail = user.map((item, index) => {
  //   return item.email;
  // });

  // await BillNotificationMail(
  //   userEmail.map((item, index) => {
  //     return item;
  //   })
  // );

  return res
    .status(200)
    .json({ activebills: update, message: "Sent bill to user successfull" });
});

/**
 *
 * @description Pay bill
 * @method POST
 * @route api/v1/btypebill/paybill
 * @access public
 */
export const payBills = asyncHandler(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const response = await BtypeBill.findByIdAndUpdate(id, data, { new: true });

  res
    .status(200)
    .json({ btypebills: response, message: "paybill successfull" });
});

/**
 *
 * @description SeeAllUserBillInAdmin
 * @method GET
 * @route api/v1/btypebill/paybill
 * @access public
 */

export const SeeAllUserPaymentBillInAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const paymentUser = await Payment.find().where("users").in([id]);

  const bills = paymentUser.map((item) => {
    return item.btypebills;
  });

  if (!bills) {
    return res.status(400).json({ message: "Data not found" });
  }

  const data = await BtypeBill.find({ activebill: true })
    .where("_id")
    .in(bills);
  res
    .status(200)
    .json({ userpaidbills: data, message: "All student get successfull" });
});

export const SeeAllUserDueBillInAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const paymentUser = await Payment.find().where("users").in([id]);

  const bills = paymentUser.map((item) => {
    return item.btypebills;
  });

  if (!bills) {
    return res.status(400).json({ message: "Data not found" });
  }

  const data = await BtypeBill.find({ activebill: true })
    .where("_id")
    .nin(bills);
  res
    .status(200)
    .json({ userduebills: data, message: "All student get successfull" });
});
