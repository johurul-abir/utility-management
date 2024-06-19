import asyncHandler from "express-async-handler";
import BtypeBill from "../model/btypeBillSchema.js";
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
  const data = await BtypeBill.find();
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

  res
    .status(200)
    .json({ bill: data, message: "New student create successfull" });
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
 * @description sentBill to user email
 * @method get
 * @route api/v1/btypebill/blsms
 * @access public
 */

export const sentBillMsg = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { activebill } = req.body;

  const update = await BtypeBill.findByIdAndUpdate(
    id,
    { activebill: true },
    { new: true }
  );
  const user = await User?.find();

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
