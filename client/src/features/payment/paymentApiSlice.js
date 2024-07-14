import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//Get all btype bills
export const getAllAdminPayments = createAsyncThunk(
  "payment/getAllAdminPayments",
  async () => {
    try {
      const response = await API.get("/api/v1/payment");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Get all btype bills
export const getAllPayments = createAsyncThunk(
  "payment/getAllPayments",
  async () => {
    try {
      const response = await API.get("/api/v1/payment/user");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//get all Due bills
export const getAllDuebills = createAsyncThunk(
  "payment/getAllDuebills",
  async () => {
    try {
      const response = await API.get("/api/v1/btypebill/duebills");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//get all Due bills
export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (data) => {
    try {
      const response = await API.post("/api/v1/payment", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//get all Due bills
export const deletePayment = createAsyncThunk(
  "payment/deletePayment",
  async (id) => {
    try {
      const response = await API.delete(`/api/v1/payment/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
