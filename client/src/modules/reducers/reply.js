import { UPLOAD_REPLY, GET_REPLY, DELETE_REPLY } from 'modules/actions/types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case UPLOAD_REPLY:
      return { ...state, uploadSuccess: action.payload };
    case GET_REPLY:
      return { ...state, replyData: action.payload };
    case DELETE_REPLY:
      return { ...state, deleteSuccess: action.payload };
    default:
      return state;
  }
}
