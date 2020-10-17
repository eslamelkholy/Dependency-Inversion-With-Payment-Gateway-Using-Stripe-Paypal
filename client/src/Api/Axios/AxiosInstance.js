import axios from "axios";

const END_POINT = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: END_POINT + "/",
});

axiosInstance.interceptors.request.use((cfg) => {
  cfg.headers["Accept"] = "application/json";
  return cfg;
});

export default axiosInstance;
