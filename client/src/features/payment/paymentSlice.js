import { createSlice } from "@reduxjs/toolkit";
import {
  createPayment,
  deletePayment,
  getAllAdminPayments,
  getAllDuebills,
  getAllPayments,
} from "./paymentApiSlice";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payments: [],
    loading: false,
    message: null,
    error: null,
    duepaymets: [],
    adminpayments: [],
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.error = null), (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder
      //get btype bills
      .addCase(getAllAdminPayments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAdminPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllAdminPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.adminpayments = action.payload.payment;
        state.message = null;
      })

      //get btype bills
      .addCase(getAllPayments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload.userpayment;
        state.message = action.payload.payment;
      })
      .addCase(getAllPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //get all due payment bills
      .addCase(getAllDuebills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDuebills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllDuebills.fulfilled, (state, action) => {
        state.loading = false;
        state.duepaymets = action.payload.duebills;
      })

      //create user payment
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
        state.message = action.payload.message;
      })

      //delete payment
      .addCase(deletePayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
        state.message = action.payload.message;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = paymentSlice.actions;

//export default
export default paymentSlice.reducer;
