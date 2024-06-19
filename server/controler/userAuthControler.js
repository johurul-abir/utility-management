import asyncHandler from "express-async-handler";
import { createOTP, isEmail, isMobile, tokenDecode } from "../helper/Helper.js";
import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AccountActivationEmail } from "../emails/accountActivation.js";
import { sendSMS } from "../utils/sendSms.js";

/**
 * @description  user Register
 * @method POST
 * @route /api/v1/student
 * @access public
 */

export const userRegister = asyncHandler(async (req, res) => {
  //get json data
  const { name, auth, password, flatetype, flateno } = req.body;

  //data validation
  if (!name || !auth || !password || !flatetype || !flateno) {
    return res.status(400).json({ message: "all fields are required" });
  }

  //check auth
  let authEmail = null;
  let authPhone = null;

  if (isEmail(auth)) {
    authEmail = auth;
    //check valid email
    const checkEmail = await User.findOne({ email: authEmail });
    if (checkEmail) {
      return res.status(400).json({ message: "email allready exists" });
    }
  }

  //check Phone
  if (isMobile(auth)) {
    authPhone = auth;
    //check valid phone
    const checkPhone = await User.findOne({ phone: authPhone });
    if (checkPhone) {
      return res.status(400).json({ message: "Phone allready exists" });
    }
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);

  //create otp
  const otp = createOTP();

  const authData = await User.create({
    name: name,
    email: authEmail,
    phone: authPhone,
    password: hashPassword,
    accessToken: otp,
    flatetype: flatetype,
    flateno: flateno,
  });

  //create student
  if (authData) {
    //sent token to cookie
    const activationToken = jwt.sign(
      { authData },

      process.env.ACCOUNT_ACTIVAION_SECRET,
      {
        expiresIn: "10min",
      }
    );

    res.cookie("activationToken", activationToken);

    //sent varification code
    if (authEmail) {
      await AccountActivationEmail(auth, {
        username: auth,
        password: password,
      });
    } else if (authPhone) {
      await sendSMS(
        auth,
        `Hello ${name} your username is ${auth} and Password is: ${password}`
      );
    } else {
      return res
        .status(400)
        .json({ message: "check phone or email sms limit" });
    }
  }

  //respons
  res.status(200).json({ user: authData, message: "Register successfull" });
});

/**
 * @description  student Account Activition
 * @method POST
 * @route /api/v1/student
 * @access public
 */

export const accountActivitonByOtp = asyncHandler(async (req, res) => {
  //get token
  const { token } = req.params;
  const { otp } = req.body;

  //token dicode
  const activitionToken = tokenDecode(token);

  // veryfiy token
  const tokenVerify = jwt.verify(
    activitionToken,
    process.env.ACCOUNT_ACTIVAION_SECRET
  );

  //check token
  if (!tokenVerify) {
    return res.status(400).json({ message: "Invalid Token" });
  }

  //activate Student
  let activateStudent = null;
  if (isEmail(tokenVerify.auth)) {
    activateStudent = await User.findOne({ email: tokenVerify.auth });
    if (!activateStudent) {
      return res.status(400).json({ message: "Student email not found" });
    }
  } else if (isMobile(tokenVerify.auth)) {
    activateStudent = await User.findOne({ phone: tokenVerify.auth });
    if (!activateStudent) {
      return res.status(400).json({ message: "Student phone not found" });
    }
  } else {
    return res.status(400).json({ message: "Invalid Student" });
  }

  //check otp
  if (otp !== activateStudent.accessToken) {
    return res.status(400).json({ message: "Wrong OTP" });
  }

  //update active Student
  activateStudent.isActive = true;
  activateStudent.accessToken = null;
  activateStudent.save();

  //clear cookie
  res.clearCookie("activitionToken");

  //final response
  res.status(200).json({ message: "Student Activation successfull" });
});

/**
 * @description  Student Login
 * @method POST
 * @route /api/v1/student/login
 * @access public
 */

export const userLogin = asyncHandler(async (req, res) => {
  //get student login data
  const { auth, password } = req.body;

  //login validatin
  if (!auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check loing user
  let loginSudent = null;
  if (isEmail(auth)) {
    loginSudent = await User.findOne({ email: auth });
    if (!loginSudent) {
      return res.status(400).json({ message: "Student email not found" });
    }
  } else if (isMobile(auth)) {
    loginSudent = await User.findOne({ phone: auth });
    if (!loginSudent) {
      return res.status(400).json({ message: "Student phone not found" });
    }
  } else {
    return res.status(400).json({ message: "Invalid Student" });
  }

  //check password
  const checkPass = bcrypt.compareSync(password, loginSudent.password);
  if (!checkPass) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  //create login token
  const accessToken = jwt.sign({ auth: auth }, process.env.LOGIN_SECRET, {
    expiresIn: "36500d",
  });

  //set token
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 365 * 100,
  });

  //final response
  res.status(200).json({
    accessToken,
    auth: loginSudent,
    message: "Login successfull",
  });
});

/**
 * @description  Student Logout
 * @method POST
 * @route /api/v1/student/login
 * @access public
 */

export const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logout successfull" });
});

/**
 * @description  Logdin student
 * @method POST
 * @route /api/v1/student/logdin
 * @access private
 */

export const logdinUser = asyncHandler(async (req, res) => {
  if (!req.loginuser) {
    return res.status(400).json({ message: "Unautorized User" });
  }
  //final response
  res.status(200).json({ auth: req.loginuser, message: "Loggedin user found" });
});

/**
 * @description  get all users
 * @method get
 * @route /api/v1/auth/users
 * @access private
 */

export const getAllusers = asyncHandler(async (req, res) => {
  const user = await User.find();

  //final response
  res.status(200).json({ auth: user, message: "get all user successfull" });
});

/**
 * @description  pay bill
 * @method patch
 * @route /api/v1/auth/users/paybill
 * @access private
 */
export const createPaybill = asyncHandler(async (req, res) => {
  const { id } = req.me;
  const { billId } = req.body;
  const user = await User.find(_id);

  // const addBill = user.donebillofmonth.find((id)=> id.toString() === billId);

  const userp = await User.findByIdAndUpdate(
    id,
    {
      $push: { donebillofmonth: billId },
    },
    {
      new: true,
    }
  );

  res.status(200).json({ userp, message: "Paybill successfull" });
});
