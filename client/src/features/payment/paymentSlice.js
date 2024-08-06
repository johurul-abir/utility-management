import { createSlice } from "@reduxjs/toolkit";
import {
  createPayment,
  deletePayment,
  getAllAdminPayments,
  getAllDuebills,
  getAllPayments,
  getLast12MonthDueUsers,
  getRuningMonthDueUsers,
  getRuningMonthPaidUsers,
  moreThen12MonthDueUsers,
  moreThen5MonthDueUsers,
} from "./paymentApiSlice";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payments: [],
    runingpaidusers: [],
    runingdueusers: [],
    last12monthdueusers: [],
    morethan5monthdueusers: [],
    morethan12monthdueusers: [],
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
        state.message = null;
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
        state.message = null;
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
      })
      //get all runing month paid users
      .addCase(getRuningMonthPaidUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(getRuningMonthPaidUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getRuningMonthPaidUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.runingpaidusers = action.payload.runingpaid;
        state.message = action.payload.message;
      })

      //get all runing month paid users
      .addCase(getRuningMonthDueUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(getRuningMonthDueUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getRuningMonthDueUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.runingdueusers = action.payload.runingdue;
        state.message = null;
      })
      //get all last 12 Month Due User
      .addCase(getLast12MonthDueUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(getLast12MonthDueUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getLast12MonthDueUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.last12monthdueusers = action.payload.last12months;
        state.message = null;
      })
      //More than
      .addCase(moreThen5MonthDueUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(moreThen5MonthDueUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(moreThen5MonthDueUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.morethan5monthdueusers = action.payload.more6monthdueusers;
        state.message = null;
      })
      //More than
      .addCase(moreThen12MonthDueUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(moreThen12MonthDueUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(moreThen12MonthDueUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.morethan12monthdueusers = action.payload.more12monthdueusers;
        state.message = null;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = paymentSlice.actions;

//export default
export default paymentSlice.reducer;
