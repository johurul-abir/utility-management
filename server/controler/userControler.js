import { findPublicId, isEmail, isMobile } from "../helper/Helper.js";
import bcrypt from "bcrypt";
import {
  fileDataDeleteFromCloud,
  fileUploadToCloud,
} from "../utils/cloudinary.js";
import asyncHandler from "express-async-handler";
import User from "../model/userSchema.js";
import BtypeBill from "../model/btypeBillSchema.js";
import Payment from "../model/Paymet.js";

/**
 *
 * @description Get all Users
 * @method GET
 * @route api/v1/student
 * @access public
 */

export const getAllUser = asyncHandler(async (req, res) => {
  const data = await User.find();

  res.status(200).json({ users: data, message: "Get all users successfull" });
});

/**
 *
 * @description Single Student
 * @method GET
 * @route api/v1/student
 * @access public
 */

export const singleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const singleData = await User.findById(id);

  // check user
  if (!singleData) {
    return res.status(404).json({ message: "User data not found" });
  }
  res.status(200).json(singleData);
});

/**
 *
 * @description Update student
 * @method PEATCH
 * @route api/v1/student
 * @access public
 */

// export const updateUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   //get student data
//   const { name, email, phone, photo } = req.body;

//   // data validation
//   if (!name) {
//     return res.status(400).json({ message: "name and phone is required" });
//   }

//   const updata = await Student.findByIdAndUpdate(
//     id,
//     {
//       name,
//     },
//     {
//       new: true,
//     }
//   );
//   res.status(200).json({ user: updata, message: "update successfull" });
// });
