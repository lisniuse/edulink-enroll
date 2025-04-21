import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    // 获取 token（例如从 localStorage 或其他存储中）
    const token = localStorage.getItem('token');

    // 如果存在 token，则将其添加到请求头中
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
