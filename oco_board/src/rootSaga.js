import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"
import articleSaga from "./sagas/articleSaga";
import boardSaga from "./sagas/boardSaga";
import commentSaga from "./sagas/commentSaga";
import codeSaga from "./sagas/codeSaga";

let combineSagas = {};
combineSagas = Object.assign(combineSagas, { articleSaga, boardSaga, commentSaga, codeSaga });

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}