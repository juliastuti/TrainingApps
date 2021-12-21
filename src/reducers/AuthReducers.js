export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {...state, token: action.token};
    case 'LOGIN':
      return {...state, token: action.token};
    case 'SIGN_UP':
      return {...state, token: action.token};
    case 'LOGOUT':
      return {...state, token: null};
    default:
      return state;
  }
};
