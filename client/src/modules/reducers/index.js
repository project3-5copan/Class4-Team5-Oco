import { combineReducers } from 'redux';

import userReducer from './user';
import boardReducer from './board';
import commentReducer from './comment';
import likeReducer from './like';
import replyReducer from './reply';

const rootReducer = combineReducers({
  user: userReducer,
  board: boardReducer,
  comment: commentReducer,
  like: likeReducer,
  reply: replyReducer,
});

export default rootReducer;
