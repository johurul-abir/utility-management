import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./userApiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    runingpaidusers: [],
    runingdueusers: [],
    loading: false,
    message: null,
    error: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.error = null), (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.message = action.payload.message;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//setMessage Empty
export const { setMessageEmpty } = userSlice.actions;

//export default
export default userSlice.reducer;
