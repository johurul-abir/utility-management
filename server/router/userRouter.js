import {
  createUser,
  deleteUser,
  getAllUser,
  singleUser,
  updateUser,
} from "../controler/userControler.js";
import express from "express";
import { studentMulter } from "../utils/multer.js";

//init router
const router = express.Router();

//all student routers
router.post("/", studentMulter, createUser);
router.get("/", getAllUser);
router.delete("/:id", deleteUser);
router.get("/:id", singleUser);
router.patch("/:id", updateUser);

//export default router
export default router;
