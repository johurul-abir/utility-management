import asyncHandler from "express-async-handler";
import Complain from "../model/complainSchema.js";
import fs from "fs";

/**
 *
 * @description create Complain
 * @method POST
 * @route api/v1/complain
 * @access public
 */

export const createComplain = asyncHandler(async (req, res) => {
  //get student data
  const { title, content, user_id } = req.body;

  const data = await Complain.create({
    title,
    content,
    user_id,
    photo: req.file?.filename,
  });

  res
    .status(200)
    .json({ notice: data, message: "New Notice create successfull" });
});

/**
 *
 * @description Get all complain
 * @method GET
 * @route api/v1/complain
 * @access public
 */

export const getAllComplain = asyncHandler(async (req, res) => {
  const response = await Complain.find().populate("user_id");
  res
    .status(200)
    .json({ complain: response, message: "get all notice successfull" });
});

/**
 *
 * @description Get single Complain
 * @method get
 * @route api/v1/complain
 * @access public
 */

export const getSingleComplain = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Complain.findById(id);

  res
    .status(200)
    .json({ singleComplain: response, message: "get single Notice" });
});

/**
 *
 * @description Delete Complain
 * @method DELETE
 * @route api/v1/complain
 * @access public
 */

export const deleteComplain = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await Complain.findById(id);
  fs.unlink("public/complain/" + data.photo, function (err) {
    console.log(err);
  });

  await Complain.findByIdAndDelete(id);

  res.status(200).json({ message: "Notice deleted successfull" });
});
