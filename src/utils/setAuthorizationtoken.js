import axiosInstance from './axiosInstance';

export default function setAuthorizationToken(token) {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = token;
  }
  else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
}
