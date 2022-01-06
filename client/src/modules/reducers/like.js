import {
  GET_LIKE,
  ISCHECK_LIKE,
  SUBTRACTION_LIKE,
  ADDITION_LIKE,
  LIKE_LIST,
} from '../actions/types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_LIKE:
      return { ...state, likeData: action.payload };
    case ISCHECK_LIKE:
      return { ...state, isCheck: action.payload };
    case SUBTRACTION_LIKE:
      return { ...state, subLike: action.payload };
    case ADDITION_LIKE:
      return { ...state, addLike: action.payload };
    case LIKE_LIST:
      return { ...state, likeList: action.payload };
    default:
      return state;
  }
}
