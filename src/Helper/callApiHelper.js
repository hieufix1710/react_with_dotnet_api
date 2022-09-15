import axios from "axios";
import { BASE_URL_API } from "../Constants/URLs";

const instance = axios.create({
  baseURL: BASE_URL_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      // config.headers["Authorization"] = "Bearer " + token;
      config.headers["Authorization"] = token;
    }else {
      window.location.replace("/login");
      throw new Error("Access token not found");
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    const originalRequest = error.config
    instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
    if (
      (error.response.status === 401 &&
      originalRequest.url === "/auth") || !instance.defaults.headers.common['Authorization']
    ) {
      window.location.replace("/login");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const accessToken = localStorage.getItem('access_token');

      return instance.post('/auth', {access_token: accessToken}).then((res) => {
        if (res.status === 200){
          if (res.data.access_token != null){
            localStorage.setItem('access_token', res.data['access_token']);
          }
          // instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
          instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
          return instance(originalRequest)
        }
      })

    }
    return Promise.reject(error)
  }
);

/**
 * This is instance of axios library.
 * Example:
 * endpoint: '/user'
 * method: 'POST'
 * body: {user: {"email": "email user", "password": "password user"}}
 *
 */
export const fetchApi = async (endpoint, method = "GET", body) => {
  return instance({
    url: endpoint,
    method: method,
    data: body,
  });
};