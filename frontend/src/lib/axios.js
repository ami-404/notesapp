import axios from "axios";

// make url dynamic because in production it's difficult to predict the url
const BASE_URL =
  import.meta.env.mode === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
