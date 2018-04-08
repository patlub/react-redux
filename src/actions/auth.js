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
