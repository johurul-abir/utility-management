import mongoose from "mongoose";

// create user schema
const noticelSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },

    active_notive: {
      type: Boolean,
      default: null,
    },

    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

// export schema
export default mongoose.model("Notice", noticelSchema);
