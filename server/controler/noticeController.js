import asyncHandler from "express-async-handler";
import Notice from "../model/noticeSchema.js";

/**
 *
 * @description create Notice
 * @method POST
 * @route api/v1/btypebill
 * @access public
 */

export const crateNotice = asyncHandler(async (req, res) => {
  //get student data
  const { title, content } = req.body;

  //check title and conent

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const data = await Notice.create({
    title,
    content,
  });

  res
    .status(200)
    .json({ notice: data, message: "New Notice create successfull" });
});

/**
 *
 * @description Delete Notice
 * @method DELETE
 * @route api/v1/notice
 * @access public
 */

export const getAllNotice = asyncHandler(async (req, res) => {
  const response = await Notice.find();
  res
    .status(200)
    .json({ notices: response, message: "get all notice successfull" });
});

/**
 *
 * @description Get single Notice
 * @method get
 * @route api/v1/notice
 * @access public
 */

export const getSingleNotice = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Notice.findById(id);

  res
    .status(200)
    .json({ singleNotice: response, message: "get single Notice" });
});

/**
 *
 * @description Delete Notice
 * @method DELETE
 * @route api/v1/notice
 * @access public
 */

export const deleteNotice = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Notice.findByIdAndDelete(id);

  res.status(200).json({ message: "Notice deleted successfull" });
});
