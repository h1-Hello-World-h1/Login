import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3055",
});

export const signup = async (userData) => {
  return await api.post("/", userData);
};

export const login = async (userData) => {
  return await api.post("/login", userData);
};

export default api;
