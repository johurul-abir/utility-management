import {
  accountActivitonByOtp,
  createPaybill,
  getAllusers,
  logdinUser,
  userLogin,
  userLogout,
  userRegister,
} from "../controler/userAuthControler.js";
import express from "express";
import tokenVerify from "../middleware/tokenVerify.js";

//init Router
const router = express.Router();
router.post("/api/v1/register", userRegister);
router.post("/api/v1/activate/:token", accountActivitonByOtp);
router.post("/api/v1/user/login", userLogin);
router.post("/api/v1/user/logout", userLogout);
router.get("/me", tokenVerify, logdinUser);
router.get("/api/v1/user", getAllusers);
router.put("/api/v1/user/paybill", tokenVerify, createPaybill);

//export default
export default router;
