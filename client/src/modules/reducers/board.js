import {
  UPLOAD_BOARD,
  GET_BOARD,
  LIST_BOARD,
  DELETE_BOARD,
  ISAUTHOR_BOARD,
  UPDATE_BOARD,
} from '../actions/types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case UPLOAD_BOARD:
      return { ...state, uploadSuccess: action.payload };
    case GET_BOARD:
      return { ...state, boardData: action.payload };
    case LIST_BOARD:
      return { ...state, boardPage: action.payload };
    case DELETE_BOARD:
      return { ...state, deleteSuccess: action.payload };
    case ISAUTHOR_BOARD:
      return { ...state, isAuthor: action.payload };
    case UPDATE_BOARD:
      return { ...state, updateSuccess: action.payload };
    default:
      return state;
  }
}
