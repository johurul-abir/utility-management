import expressAsyncHandler from "express-async-handler";
import Notice from "../model/noticeSchema.js";

/**
 *
 * @description create Notice
 * @method POST
 * @route api/v1/btypebill
 * @access public
 */

export const crateNotice = expressAsyncHandler(async (req, res) => {
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
