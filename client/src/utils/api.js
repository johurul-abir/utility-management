import axios from "axios";

//create axios instance
const API = axios.create({
  baseURL: "http://localhost:6060/",
  timeout: 10000,
  withCredentials: true,
});

//export default
export default API;
