import mongoose from "mongoose";

// create user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    location: {
      type: String,
      default: null,
      trim: true,
    },
    flatetype: {
      type: String,
      default: null,
      trim: true,
    },
    flateno: {
      type: String,
      default: null,
      trim: true,
    },
    allbills: {
      type: [String],
      default: [],
    },
    donebillofmonth: {
      type: [mongoose.Schema.Types.ObjectId],
      rer: "BtypeBill",
      default: [],
      trim: true,
    },
    duebillofmonth: {
      type: [mongoose.Schema.Types.ObjectId],
      rer: "BtypeBill",
      default: [],
      trim: true,
    },
    gender: {
      type: Boolean,
      enum: ["Male", "Female"],
      default: false,
    },
    profession: {
      type: String,
      default: null,
      trim: true,
    },

    accessToken: {
      type: String,
      default: null,
      trim: true,
    },
    isActivate: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
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
export default mongoose.model("User", userSchema);
