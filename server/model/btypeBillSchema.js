import mongoose from "mongoose";

// create user schema
const btypeBillSchema = mongoose.Schema(
  {
    users: {
      type: [mongoose.Schema.Types.ObjectId],
      rer: "userSchema",
      default: [],
    },

    billdate: {
      type: String,
      default: null,
    },
    gass: {
      type: Number,
      default: null,
    },
    electricity: {
      type: Number,
      default: null,
    },
    water: {
      type: Number,
      default: null,
    },
    internalfacilities: {
      type: Number,
      default: null,
    },
    safety: {
      type: Number,
      default: null,
      default: null,
    },
    commonmitter: {
      type: Number,
      default: null,
      default: null,
    },
    generator: {
      type: Number,
      default: null,
      default: null,
    },
    garage: {
      type: Number,
      default: null,
      default: null,
    },
    mosjid: {
      type: Number,
      default: null,
      default: null,
    },
    staf: {
      type: Number,
      default: null,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
    fine: {
      type: Number,
      default: null,
    },
    expire: {
      type: String,
      default: null,
    },

    activebill: {
      type: Boolean,
      default: false,
    },
    paybill: {
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
export default mongoose.model("BtypeBill", btypeBillSchema);
