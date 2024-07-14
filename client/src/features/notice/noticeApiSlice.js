import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//Get all btype bills
export const getAllNotice = createAsyncThunk(
  "notice/getAllNotice",
  async () => {
    try {
      const response = await API.get("/api/v1/notice");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Get single Notice
export const getSingleNotice = createAsyncThunk(
  "notice/getSingleNotice",
  async (id) => {
    try {
      const response = await API.get(`/api/v1/notice/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Delete Notice
export const deleteNotice = createAsyncThunk(
  "notice/deleteNotice",
  async (id) => {
    try {
      const response = await API.delete(`/api/v1/notice/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Create Notice
export const createNotice = createAsyncThunk(
  "notice/createNotice",
  async (data) => {
    try {
      const response = await API.post("/api/v1/notice", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
