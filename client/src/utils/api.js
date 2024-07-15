import axios from "axios";

//create axios instance
const API = axios.create({
  baseURL: "https://utility-management.onrender.com/",
  timeout: 10000,
  withCredentials: true,
});

//export default
export default API;
