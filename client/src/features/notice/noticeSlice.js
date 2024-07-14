import { createSlice } from "@reduxjs/toolkit";
import {
  createNotice,
  deleteNotice,
  getAllNotice,
  getSingleNotice,
} from "./noticeApiSlice";

const noticeSlice = createSlice({
  name: "notice",
  initialState: {
    notices: [],
    loading: false,
    message: null,
    error: null,
    singlenotice: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.error = null), (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder

      //Create Notice
      .addCase(createNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = action.payload;
        state.message = action.payload.message;
      })

      //get btype bills
      .addCase(getAllNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = action.payload.notices;
        state.message = null;
      })
      //get single Notice
      .addCase(getSingleNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSingleNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.singlenotice = action.payload.singleNotice;
        state.message = null;
      })

      //delete Notice
      .addCase(deleteNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = action.payload;
        state.message = action.payload.message;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = noticeSlice.actions;

//export default
export default noticeSlice.reducer;
