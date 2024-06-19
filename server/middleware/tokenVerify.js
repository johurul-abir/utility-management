import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { isEmail, isMobile } from "../helper/Helper.js";
import User from "../model/userSchema.js";

//create token verify middleware
const tokenVeryfiy = (req, res, next) => {
  //get server token

  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(400).json({ message: "Unauthoraized" });
  }

  //token verify
  jwt.verify(
    accessToken,
    process.env.LOGIN_SECRET,
    asyncHandler(async (error, decode) => {
      if (error) {
        return res.status(400).json({ message: "Invalid token" });
      }
      // get login user data
      let me = null;
      if (isEmail(decode.auth)) {
        me = await User.findOne({ email: decode.auth }).select("-password");
      } else if (isMobile(decode.auth)) {
        me = await User.findOne({ phone: decode.auth }).select("-password");
      } else {
        return res.status(400).json({ message: "Invalid auth Data" });
      }
      req.loginuser = me;
      next();
    })
  );
};

//export default
export default tokenVeryfiy;
