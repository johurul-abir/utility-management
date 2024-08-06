import { getAllUser, singleUser } from "../controler/userControler.js";
import express from "express";

//init router
const router = express.Router();

//all student routers
//router.post("/", studentMulter, createUser);
router.get("/", getAllUser);
// router.delete("/:id", deleteUser);
router.get("/:id", singleUser);

//export default router
export default router;
