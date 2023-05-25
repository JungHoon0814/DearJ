import axios, { InternalAxiosRequestConfig } from 'axios';

// export const serverUrl = process.env.REACT_APP_SERVER_URL;
const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

API.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  const userToken = localStorage.getItem('userToken');
  if (userToken) {
    req.headers.Authorization = `Bearer ${userToken}`;
  }
  return req;
});

export default API;
