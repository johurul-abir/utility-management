import express from "express";
import { crateNotice } from "../controler/noticeController.js";

const router = express.Router();

router.post("/", crateNotice);

//export default
export default router;
