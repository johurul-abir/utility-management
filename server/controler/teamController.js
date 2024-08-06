import asyncHandler from "express-async-handler";
import Team from "../model/teamSchema.js";
import fs from "fs";

/**
 *
 * @description create Notice
 * @method POST
 * @route api/v1/btypebill
 * @access public
 */

export const crateTeamMember = asyncHandler(async (req, res) => {
  //get student data
  const {
    name,
    position,
    phone,
    email,
    salary,
    location,
    facebook,
    instagram,
    linkedin,
    pintarest,
    age,
    marrid_status,
    gender,
  } = req.body;

  const data = await Team.create({
    name,
    position,
    phone,
    email,
    salary,
    location,
    facebook,
    instagram,
    linkedin,
    pintarest,
    age,
    marrid_status,
    gender,
    photo: req.file.filename,
  });

  res
    .status(200)
    .json({ team: data, message: "New Team Member create successfull" });
});

/**
 *
 * @description Get all Team Member
 * @method GET
 * @route api/v1/team
 * @access public
 */

export const getAllTeamMember = asyncHandler(async (req, res) => {
  const response = await Team.find();
  res
    .status(200)
    .json({ allteam: response, message: "get all Team member successfull" });
});

// /**
//  *
//  * @description Get single Notice
//  * @method get
//  * @route api/v1/notice
//  * @access public
//  */

// export const getSingleNotice = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const response = await Notice.findById(id);

//   res
//     .status(200)
//     .json({ singleNotice: response, message: "get single Notice" });
// });

/**
 *
 * @description Delete Team Member
 * @method DELETE
 * @route api/v1/team
 * @access public
 */

export const deleteTeamMember = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await Team.findById(id);
  console.log(data);

  fs.unlink("public/team/" + data?.photo, function (err) {
    console.log(err);
  });
  await Team.findByIdAndDelete(id);

  res.status(200).json({ message: "Team member deleted successfull" });
});
