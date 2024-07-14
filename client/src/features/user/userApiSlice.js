import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//get all users
export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await API.get("/api/v1/user");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
