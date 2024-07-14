import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//Get all btype bills
export const getAllBtypeBills = createAsyncThunk(
  "btype/getAllBtypeBills",
  async () => {
    try {
      const response = await API.get("/api/v1/btypebill");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Delete btype bills
export const deleteBill = createAsyncThunk("btype/deleteBill", async (id) => {
  try {
    const response = await API.delete(`/api/v1/btypebill/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Done Active bill and sent bill to user email adn phone
export const activeBill = createAsyncThunk("btype/activeBill", async (id) => {
  try {
    const response = await API.patch(`/api/v1/btypebill/sendmsg/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//Get all btype bills
export const getActiveBills = createAsyncThunk(
  "btype/getActiveBills",
  async () => {
    try {
      const response = await API.get("/api/v1/btypebill/activebills");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Get all due bills from admin panel
export const getDueBillsForAdmin = createAsyncThunk(
  "btype/getDueBillsForAdmin",
  async (id) => {
    try {
      const response = await API.get(`/api/v1/btypebill/seeuserduebills/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Create btype bills
export const creatBtypeBill = createAsyncThunk(
  "btype/creatBtypeBill",
  async (data) => {
    try {
      const response = await API.post("/api/v1/btypebill", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
