import { findPublicId, isEmail, isMobile } from "../helper/Helper.js";
import Student from "../model/userSchema.js";
import bcrypt from "bcrypt";
import {
  fileDataDeleteFromCloud,
  fileUploadToCloud,
} from "../utils/cloudinary.js";
import asyncHandler from "express-async-handler";

/**
 *
 * @description Get all student
 * @method GET
 * @route api/v1/student
 * @access public
 */

export const getAllUser = asyncHandler(async (req, res) => {
  const data = await Student.find();

  res.status(200).json({ user: data, message: "All student get successfull" });
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

  const singleData = await Student.findById(id);

  // check user
  if (!singleData) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.status(200).json(singleData);
});

/**
 *
 * @description Delete Student
 * @method DELETE
 * @route api/v1/student
 * @access public
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const delData = await Student.findByIdAndDelete(id);

  await fileDataDeleteFromCloud(findPublicId(delData.photo));

  res.status(200).json({ delData, message: "student delete successfull" });
});

/**
 *
 * @description Update student
 * @method PEATCH
 * @route api/v1/student
 * @access public
 */

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //get student data
  const { name, email, phone, photo } = req.body;

  // data validation
  if (!name) {
    return res.status(400).json({ message: "name and phone is required" });
  }

  const updata = await Student.findByIdAndUpdate(
    id,
    {
      name,
    },
    {
      new: true,
    }
  );
  res.status(200).json({ user: updata, message: "update successfull" });
});

/**
 *
 * @description Create Student
 * @method POST
 * @route api/v1/student
 * @access public
 */

export const createUser = asyncHandler(async (req, res) => {
  //get student data
  const { name, email, phone, password, photo } = req.body;

  // data validation
  if (!name || !phone || !password) {
    return res
      .status(400)
      .json({ message: "name, phone and passwor is required" });
  }

  //check valid email
  if (!isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  //check unic email
  const checkEmail = await Student.findOne({ email });
  if (checkEmail) {
    return res.status(400).json({ message: "email allready exsits" });
  }

  //check valid phone
  if (!isMobile(phone)) {
    return res.status(400).json({ message: "Invalid Phone" });
  }

  //check unick phone
  const checkPhone = await Student.findOne({ phone });

  if (checkPhone) {
    return res.status(400).json({ message: "This phone allready exists" });
  }

  //hash password
  const hashpass = await bcrypt.hash(password, 10);

  //check photo
  let fileData = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);
    fileData = data.secure_url;
  }

  const data = await Student.create({
    name,
    email,
    phone,
    password: hashpass,
    photo: fileData,
  });

  res
    .status(200)
    .json({ user: data, message: "New student create successfull" });
});
