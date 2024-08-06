import mongoose from "mongoose";

// create user schema
const complainSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    photo: {
      type: String,
      default: null,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
export default mongoose.model("Complain", complainSchema);
