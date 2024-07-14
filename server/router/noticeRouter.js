import express from "express";
import {
  crateNotice,
  deleteNotice,
  getAllNotice,
  getSingleNotice,
} from "../controler/noticeController.js";

const router = express.Router();

router.post("/", crateNotice);
router.get("/", getAllNotice);
router.delete("/:id", deleteNotice);
router.get("/:id", getSingleNotice);

//export default
export default router;
