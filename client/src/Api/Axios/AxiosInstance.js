import axios from "axios";
const axiosInstance = axios.create({
  // TODO: User Environment Variables for Our End Points Later
  baseURL: "http://localhost:3000" + "/",
});

axiosInstance.interceptors.request.use((cfg) => {
  cfg.headers["Accept"] = "application/json";
  cfg.headers["Authorization"] = `auth ${localStorage.getItem("user-auth")}`;
  return cfg;
});

export default axiosInstance;
