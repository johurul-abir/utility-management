import { createSlice } from "@reduxjs/toolkit";
import {
  activeBill,
  creatBtypeBill,
  deleteBill,
  getActiveBills,
  getAllBtypeBills,
  getDueBillsForAdmin,
} from "./btypeApiSlice";

const btypeBillSlice = createSlice({
  name: "btype",
  initialState: {
    btypebills: [],
    activebills: [],
    dueadminbills: [],
    loading: false,
    message: null,
    error: null,
    action: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.error = null), (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder
      //get btype bills
      .addCase(getAllBtypeBills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBtypeBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllBtypeBills.fulfilled, (state, action) => {
        state.loading = false;
        state.btypebills = action.payload.btypebills;
        state.message = null;
      })

      //create btype bills
      .addCase(creatBtypeBill.pending, (state) => {
        state.loading = true;
      })
      .addCase(creatBtypeBill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(creatBtypeBill.fulfilled, (state, action) => {
        state.loading = false;
        state.btypebills = [...state.btypebills, action.payload.bill];
        state.message = action.payload.message;
      })

      //get all active bills
      .addCase(getActiveBills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActiveBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getActiveBills.fulfilled, (state, action) => {
        state.loading = false;
        state.activebills = action.payload.activebills;
        state.message = null;
      })

      //Delete btype bills
      .addCase(deleteBill.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBill.fulfilled, (state, action) => {
        state.loading = false;
        state.btypebills = action.payload;
        state.message = action.payload.message;
      })

      //Done Active bill and sent bill to user email and phone
      .addCase(activeBill.pending, (state) => {
        state.loading = true;
      })
      .addCase(activeBill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(activeBill.fulfilled, (state, action) => {
        state.loading = false;
        state.btypebills = action.payload.activebills;
        state.message = action.payload.message;
      })

      //get all due bills for admin
      .addCase(getDueBillsForAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDueBillsForAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDueBillsForAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.dueadminbills = action.payload.userduebills;
        state.message = null;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = btypeBillSlice.actions;

//export default
export default btypeBillSlice.reducer;
