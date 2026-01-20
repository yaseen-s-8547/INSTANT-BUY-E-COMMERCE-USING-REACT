import axios from "axios";

export const api = axios.create({
  baseURL: "https://instant-buy-backend.onrender.com"
});