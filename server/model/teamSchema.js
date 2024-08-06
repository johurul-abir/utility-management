import mongoose from "mongoose";

// create user schema
const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: null,
    },
    photo: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    salary: {
      type: String,
      default: null,
    },
    facebook: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    instagram: {
      type: String,
      default: null,
    },
    linkedin: {
      type: String,
      default: null,
    },
    pintarest: {
      type: String,
      default: null,
    },
    age: {
      type: String,
      default: null,
    },
    marrid_status: {
      type: String,
      enum: ["Married", "Unmarried"],
      default: null,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Custom"],
      default: null,
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
export default mongoose.model("Team", teamSchema);
