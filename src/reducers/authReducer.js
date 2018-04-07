export default (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
