import express from "express";

import {
  crateTeamMember,
  deleteTeamMember,
  getAllTeamMember,
} from "../controler/teamController.js";
import { teamMulter } from "../utils/multer.js";

const router = express.Router();

router.post("/", teamMulter, crateTeamMember);
router.get("/", getAllTeamMember);
router.delete("/:id", deleteTeamMember);

//export default
export default router;
