import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  CHECK_USER,
  WITHDRAWAL_USER,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_GITHUB,
  GET_EMAIL,
  GET_GITHUB,
  GET_MYCOMMENT,
  GET_MYBOARD,
  GET_MYREPLY,
} from '../actions/types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case CHECK_USER:
      return { ...state, checkEmail: action.payload };
    case WITHDRAWAL_USER:
      return { ...state, goodBye: action.payload };
    case UPDATE_EMAIL:
      return { ...state, updateSuccess: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, updateSuccess: action.payload };
    case UPDATE_GITHUB:
      return { ...state, updateSuccess: action.payload };
    case GET_EMAIL:
      return { ...state, email: action.payload };
    case GET_GITHUB:
      return { ...state, github: action.payload };
    case GET_MYCOMMENT:
      return { ...state, myComment: action.payload };
    case GET_MYBOARD:
      return { ...state, myBoard: action.payload };
    case GET_MYREPLY:
      return { ...state, myReply: action.payload };
    default:
      return state;
  }
}
