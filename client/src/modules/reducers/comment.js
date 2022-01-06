import {
  UPLOAD_COMMENT,
  GET_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from '../actions/types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case UPLOAD_COMMENT:
      return { ...state, uploadSuccess: action.payload };
    case GET_COMMENT:
      return { ...state, commentData: action.payload };
    case DELETE_COMMENT:
      return { ...state, deleteSuccess: action.payload };
    case UPDATE_COMMENT:
      return { ...state, updateSuccess: action.payload };
    default:
      return state;
  }
}
