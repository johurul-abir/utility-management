import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//Donor register auth
export const registerDonor = createAsyncThunk(
  "auth/authLogin",
  async (data) => {
    try {
      const response = await API.post("/api/v1/register", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//patient register auth
export const registerPatient = createAsyncThunk(
  "auth/registerPatient",
  async (data) => {
    try {
      const response = await API.post("/api/v1/register", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//login user auth
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
  try {
    const response = await API.post("/api/v1/user/login", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//login user auth
export const userLogOut = createAsyncThunk("auth/userLogOut", async (data) => {
  try {
    const response = await API.post("/api/v1/user/logout", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//get logedin user wiht me route
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await API.get("/me");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
