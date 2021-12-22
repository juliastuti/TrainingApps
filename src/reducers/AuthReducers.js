export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {...state, token: action.token, userId: action.userId};
    case 'LOGIN':
      return {...state, token: action.token, userId: action.userId};
    case 'SIGN_UP':
      return {...state, token: action.token, userId: action.userId};
    case 'LOGOUT':
      return {...state, token: null, userId: null};
    default:
      return state;
  }
};
