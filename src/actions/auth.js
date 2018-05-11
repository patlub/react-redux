import axiosInstance from '../utils/axiosInstance';
import storeToken from '../utils/storeToken';

export function signupAction(userData) {
  return dispatch => (
    axiosInstance.post('/api/users/signUp', userData).then(
      response => {
        const { token } = response.data;
        storeToken(token);
      }
    )
  );
}

export function signinAction(userData) {
  return dispatch => (
    axiosInstance.post('/api/users/signIn', userData).then(
      response => {
        const { token } = response.data;
        storeToken(token);
      }
    )
  );
}

export function addBucketAction(todoData) {
  return dispatch => (
    axiosInstance.post('api/users/addTodo', todoData)
  );
}
