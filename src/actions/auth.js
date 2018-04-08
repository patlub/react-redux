import axiosInstance from '../config/axiosInstance';

export function signupAction(userData) {
  return dispatch => (
    axiosInstance.post('/api/users/signUp', userData)
  );
}
