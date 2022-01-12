import { combineReducers } from 'redux';
import { coinReducer, coinSaga } from "./coinReducer";
import { loadingReducer } from "./loadingReducer";
import { all } from "redux-saga/effects";

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
  Coin: coinReducer,
  Loading: loadingReducer,
});

function* rootSaga() {
  yield all([coinSaga()]);
}

export { rootReducer, rootSaga } ;
