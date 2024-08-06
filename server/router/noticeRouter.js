import express from "express";
import {
  crateNotice,
  deleteNotice,
  getAllNotice,
  getSingleNotice,
} from "../controler/noticeController.js";
import { noticeMulter } from "../utils/multer.js";

const router = express.Router();

router.post("/", noticeMulter, crateNotice);
router.get("/", getAllNotice);
router.delete("/:id", deleteNotice);
router.get("/:id", getSingleNotice);

//export default
export default router;
