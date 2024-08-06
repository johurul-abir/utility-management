import express from "express";
import {
  createComplain,
  deleteComplain,
  getAllComplain,
  getSingleComplain,
} from "../controler/complainController.js";
import { complainMulter } from "../utils/multer.js";

//init router
const router = express.Router();

router.post("/", complainMulter, createComplain);
router.get("/", getAllComplain);
router.get("/:id", getSingleComplain);
router.delete("/:id", deleteComplain);

//router export
export default router;
