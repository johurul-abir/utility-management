import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getLoggedInUser,
  registerDonor,
  registerPatient,
  userLogOut,
  userLogin,
} from "./authApiSlice";

//create Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auths: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
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
      .addCase(registerDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loading = false;
        //state.auths = action.payload;
        state.message = action.payload.message;
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //patient registation
      .addCase(registerPatient.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }) //user login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.auths = action.payload.auth;
        localStorage.setItem("user", JSON.stringify(action.payload.auth));
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //user logOut
      .addCase(userLogOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        (state.auths = null),
          localStorage.removeItem("user", JSON.stringify(action.payload.auth));
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //get loggedin user
      .addCase(getLoggedInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        localStorage.setItem("user", JSON.stringify(action.payload.auth));
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.auths = null;
        localStorage.removeItem("user");
      })
      //get all user
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.message = null;
        state.auths = action.payload.user;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = authSlice.actions;

//export reducer
export default authSlice.reducer;
