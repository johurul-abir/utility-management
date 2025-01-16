import asyncHandler from "express-async-handler";
import Payment from "../model/Paymet.js";
import BtypeBill from "../model/btypeBillSchema.js";
import User from "../model/userSchema.js";
//import SSLCommerzPayment from "sslcommerz-lts";
import dotenv from "dotenv";

//dotenv config
dotenv.config();

// STORE_ID = darpo66bee74727829
// STORE_PASSWORD = darpo66bee74727829@ssl

const store_id = "darpo66bee74727829";
const store_passwd = "darpo66bee74727829@ssl";
const is_live = false; //true for live, false for sandbox

// export const orderNow = asyncHandler(async (req, res) => {
//   const data = {
//     total_amount: 100,
//     currency: "BDT",
//     tran_id: "REF123", // use unique tran_id for each api call
//     success_url: "http://localhost:3030/success",
//     fail_url: "http://localhost:3030/fail",
//     cancel_url: "http://localhost:3030/cancel",
//     ipn_url: "http://localhost:3030/ipn",
//     shipping_method: "Courier",
//     product_name: "Computer.",
//     product_category: "Electronic",
//     product_profile: "general",
//     cus_name: "Customer Name",
//     cus_email: "customer@example.com",
//     cus_add1: "Dhaka",
//     cus_add2: "Dhaka",
//     cus_city: "Dhaka",
//     cus_state: "Dhaka",
//     cus_postcode: "1000",
//     cus_country: "Bangladesh",
//     cus_phone: "01711111111",
//     cus_fax: "01711111111",
//     ship_name: "Customer Name",
//     ship_add1: "Dhaka",
//     ship_add2: "Dhaka",
//     ship_city: "Dhaka",
//     ship_state: "Dhaka",
//     ship_postcode: 1000,
//     ship_country: "Bangladesh",
//   };

//   const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
//       sslcz.init(data).then(apiResponse => {
//           // Redirect the user to payment gateway
//           let GatewayPageURL = apiResponse.GatewayPageURL
//           res.redirect(GatewayPageURL)
//           console.log('Redirecting to: ', GatewayPageURL)
//       });
// });

export const cratePayment = asyncHandler(async (req, res) => {
  //get student data
  const { amount, users, btypebills } = req.body;

  // const user_name = await User.findById(user);
  // const bill = await BtypeBill.findById(btypebills);

  // const tran_id = Date.now() + "_" + Math.floor(Math.random() * 10000);

  // const data = {
  //   total_amount: amount,
  //   currency: "BDT",
  //   tran_id: tran_id, // use unique tran_id for each api call
  //   success_url: "http://localhost:3030/success",
  //   fail_url: "http://localhost:3030/fail",
  //   cancel_url: "http://localhost:3030/cancel",
  //   ipn_url: "http://localhost:3030/ipn",
  //   shipping_method: "Courier",
  //   flate_no: user_name?.flateno,
  //   flate_type: user_name?.flatetype,
  //   cus_name: user_name?.name,
  //   cus_email: user_name?.email,
  //   bill_date: bill?.billdate,
  //   cus_postcode: "1000",
  //   cus_country: "Bangladesh",
  //   cus_phone: user_name?.phone,
  //   ship_name: "Customer Name",
  //   ship_add1: "Dhaka",
  //   ship_add2: "Dhaka",
  //   ship_city: "Dhaka",
  //   ship_state: "Dhaka",
  //   ship_postcode: 1000,
  //   ship_country: "Bangladesh",
  // };

  //console.log(data);

  // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  // await sslcz.init(data).then((data) => {
  //   console.log(data?.GatewayPageURL);
  //   if (data?.GatewayPageURL) {
  //     return res.status(200).redirect(data?.GatewayPageURL);
  //   } else {
  //     return res
  //       .status(400)
  //       .json({ message: "ssl seccion was not successfull" });
  //   }
  // });

  const response = await Payment.create({
    amount,
    users,
    btypebills,
  });

  res.status(200).json({ payment: response, message: "Payment successfull" });
});

/**
 *
 * @description create payment
 * @method POST
 * @route api/v1/payment
 * @access public
 */

// export const cratePayment = asyncHandler(async (req, res) => {
//   //get student data
//   const { amount, users, btypebills } = req.body;

//   const response = await Payment.create({
//     amount,
//     user,
//     btypebills,
//   });

//   res.status(200).json({ payment: response, message: "Payment successfull" });
// });

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

/**
 *
 * @description get all paid running users from payment
 * @method get
 * @route api/v1/payment
 * @access public
 */

export const allPaidRuningUsers = asyncHandler(async (req, res) => {
  const lastbill = await BtypeBill.find({ activebill: true });
  const sortLastbill = lastbill.sort().reverse();
  const lastbillId = sortLastbill[0]?._id;

  const runingPaid = await Payment.find()
    .where("btypebills")
    .eq(lastbillId)
    .populate("users");

  res.status(200).json({ runingpaid: runingPaid, message: "get all payment" });
});

/**
 *
 * @description get all runing month Due users
 * @method GET
 * @route api/v1/btypebill/activebills
 * @access public
 */
export const getRuningDueUsers = asyncHandler(async (req, res) => {
  const lastbill = await BtypeBill.find({ activebill: true });
  const sortLastbill = lastbill.sort().reverse();
  const lastbillId = sortLastbill[0]?._id;

  const runingDue = await Payment.find()
    .where("btypebills")
    .in(lastbillId)
    .populate("users");

  const paidUserId = runingDue.map((item) => {
    return item.users._id;
  });

  const dueUser = await User.find({
    _id: { $nin: paidUserId },
  });

  res.status(200).json({
    runingdue: dueUser,
    message: "get all runing Due user successfull",
  });
});

/**
 *
 * @description get all runing month Due users
 * @method GET
 * @route api/v1/btypebill/activebills
 * @access public
 */
export const last12MonthDueUsers = asyncHandler(async (req, res) => {
  const lastbill = await BtypeBill.find({ activebill: true });
  const sortLastbill = lastbill.sort().reverse();
  const last12Month = sortLastbill.slice(0, 4);

  const billId = last12Month?.map((item) => {
    return item._id;
  });

  const paidBill = await Payment.find()
    .where("btypebills")
    .in(billId)
    .populate("users");

  const paidUserId = await paidBill.map((item) => {
    return item.users._id;
  });

  const counts = {};
  paidUserId?.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const countsArray = Object.entries(counts);

  const finaldata = countsArray?.map((item) => {
    return Object.assign({}, item);
  });

  const regulerPaidUsers = finaldata?.filter((obj) => {
    // Get the first value in the object
    const value = Object.values(obj)[1];
    return value > 2;
  });

  const regulerPaidUsersId = regulerPaidUsers?.map((item) => {
    const id = Object.values(item)[0];
    return id;
  });
  const dueUser = await User.find({
    _id: { $nin: regulerPaidUsersId },
  });

  res.status(200).json({
    last12months: dueUser,
    message: "get all runing Due user successfull",
  });
});

/**
 *
 * @description get all runing month Due users
 * @method GET
 * @route api/v1/btypebill/activebills
 * @access public
 */
export const More6MonthDueUsers = asyncHandler(async (req, res) => {
  const lastbill = await BtypeBill.find({ activebill: true });

  const billId = lastbill?.map((item) => {
    return item._id;
  });

  const paidBill = await Payment.find()
    .where("btypebills")
    .in(billId)
    .populate("users");

  const paidUserId = await paidBill.map((item) => {
    return item.users._id;
  });

  const counts = {};
  paidUserId?.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const countsArray = Object.entries(counts);

  const finaldata = countsArray?.map((item) => {
    return Object.assign({}, item);
  });

  const regulerPaidUsers = finaldata?.filter((obj) => {
    // Get the first value in the object
    const value = Object.values(obj)[1];
    return value > 5;
  });

  const regulerPaidUsersId = regulerPaidUsers?.map((item) => {
    const id = Object.values(item)[0];
    return id;
  });
  const dueUser = await User.find({
    _id: { $nin: regulerPaidUsersId },
  });

  res.status(200).json({
    more6monthdueusers: dueUser,
    message: "get all more than 6 Month Due user successfull",
  });
});

/**
 *
 * @description get all runing month Due users
 * @method GET
 * @route api/v1/btypebill/activebills
 * @access public
 */
export const More12MonthDueUsers = asyncHandler(async (req, res) => {
  const lastbill = await BtypeBill.find({ activebill: true });

  const billId = lastbill?.map((item) => {
    return item._id;
  });

  const paidBill = await Payment.find()
    .where("btypebills")
    .in(billId)
    .populate("users");

  const paidUserId = await paidBill.map((item) => {
    return item.users._id;
  });

  const counts = {};
  paidUserId?.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const countsArray = Object.entries(counts);

  const finaldata = countsArray?.map((item) => {
    return Object.assign({}, item);
  });

  const regulerPaidUsers = finaldata?.filter((obj) => {
    // Get the first value in the object
    const value = Object.values(obj)[1];
    return value > 12;
  });

  const regulerPaidUsersId = regulerPaidUsers?.map((item) => {
    const id = Object.values(item)[0];
    return id;
  });
  const dueUser = await User.find({
    _id: { $nin: regulerPaidUsersId },
  });

  res.status(200).json({
    more12monthdueusers: dueUser,
    message: "get all more than 6 Month Due user successfull",
  });
});
