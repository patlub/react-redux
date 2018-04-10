import axiosInstance from '../utils/axiosInstance';
import setAuthorizationToken from '../utils/setAuthorizationtoken';

export function signupAction(userData) {
  return dispatch => (
    axiosInstance.post('/api/users/signUp', userData).then(
      response => {
        const { token } = response.data;
        setAuthorizationToken(token);
      }
    )
  );
}

export function signinAction(userData) {
  return dispatch => (
    axiosInstance.post('/api/users/signIn', userData).then(
      response => {
        console.log(response);
        const { token } = response.data;
        setAuthorizationToken(token);
      }
    )
  );
}
