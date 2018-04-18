import axiosInstance from '../utils/axiosInstance';

export function addTodoAction(todoData) {
  return dispatch => (
    axiosInstance.post('/api/todos', todoData)
  );
}
