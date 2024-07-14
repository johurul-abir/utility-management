import asyncHandler from "express-async-handler";
import Payment from "../model/Paymet.js";

/**
 *
 * @description create payment
 * @method POST
 * @route api/v1/payment
 * @access public
 */

export const cratePayment = asyncHandler(async (req, res) => {
  //get student data
  const { amount, users, btypebills } = req.body;

  const response = await Payment.create({
    amount,
    users,
    btypebills,
  });

  res.status(200).json({ payment: response, message: "Payment successfull" });
});

/**
 *
 * @description get all payment
 * @method get
 * @route api/v1/payment
 * @access public
 */

export const getPayment = asyncHandler(async (req, res) => {
  const response = await Payment.find()
    .populate("users")
    .populate("btypebills");

  res.status(200).json({ payment: response, message: "get all payment" });
});

/**
 *
 * @description get all payment for user
 * @method get
 * @route api/v1/payment
 * @access public
 */

export const getUserPayment = asyncHandler(async (req, res) => {
  const response = await Payment.find()
    .where("users")
    .in([req.loginuser?._id])
    .populate("users")
    .populate("btypebills");

  res
    .status(200)
    .json({ userpayment: response, message: "get all payment bills" });
});

/**
 *
 * @description get all payment
 * @method get
 * @route api/v1/payment
 * @access public
 */

export const deletePayment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Payment.findByIdAndDelete(id);

  res
    .status(200)
    .json({ payment: response, message: "Payment deleted successfull" });
});
