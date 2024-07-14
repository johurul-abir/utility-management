import mongoose from "mongoose";

// create user schema
const paymentlSchema = mongoose.Schema(
  {
    amount: {
      type: String,
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
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: "",
    },
    btypebills: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BtypeBill",
      default: "",
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
export default mongoose.model("Payment", paymentlSchema);
