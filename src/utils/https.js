import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers["app-id"] =  "637369a9850a4f334fa9b4a3"; 
  return config;
});

export const request = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
