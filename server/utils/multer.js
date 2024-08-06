import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "noticephoto") {
      cb(null, "public/notice");
    }
    if (file.fieldname === "teamphoto") {
      cb(null, "public/team");
    }
    if (file.fieldname === "conplainphoto") {
      cb(null, "public/complain");
    }
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.floor(Math.random() * 10000) +
        "_" +
        file.originalname
    );
  },
});

//export multer middleware
export const noticeMulter = multer({
  storage,

  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/svng"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: {
    fileFilter: 5000000,
  },
}).single("noticephoto");

//export multer middleware
export const teamMulter = multer({
  storage,

  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/svng"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: {
    fileFilter: 5000000,
  },
}).single("teamphoto");

//export multer middleware
export const complainMulter = multer({
  storage,

  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/svng"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: {
    fileFilter: 5000000,
  },
}).single("conplainphoto");
