import { all, call, fork, put, select, take } from 'redux-saga/effects';
import { commentActions } from '../slices/commentSlice';
import axios from '../utils/axios';
import qs from "query-string";

// api 서버 연결 주소
function apiGetCommentList(requestParams) {
    return axios.get(`comments?${qs.stringify(requestParams)}`);
}

function apiInsertComment(requestBody) {
    return axios.post(`comments`, requestBody);
}

function apiDeleteComment(commentId) {
    return axios.delete(`comments/${commentId}`);
}

// api 서버 연결 후 action 호출
function* asyncGetCommentList(action) {
    try {
        const response = yield call(apiGetCommentList, { articleId: action.payload });
        if (response.status === 200) {
            yield put(commentActions.getCommentListSuccess(response));
        } else {
            yield put(commentActions.getCommentListFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(commentActions.getCommentListFail(e.response));
    }
}

function* asyncInsertComment(action) {
    try {
        const article = yield select((state) => state.articleReducer.article);
        const response = yield call(apiInsertComment, {
            id: 0,
            content: action.payload,
            boardId: article.boardId,
            articleId: article.id,
            insertDate: Date.now(),
            updateDate: Date.now()
        });
        if (response.status === 201) {
            yield put(commentActions.insertCommentSuccess());
            yield put(commentActions.getCommentList(article.id));
        } else {
            yield put(commentActions.insertCommentFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(commentActions.insertCommentFail(e.response));
        yield alert(`등록 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

function* asyncDeleteComment(action) {
    try {
        const article = yield select((state) => state.articleReducer.article);
        const response = yield call(apiDeleteComment, action.payload);
        if (response.status === 200) {
            yield put(commentActions.deleteCommentSuccess());
            yield put(commentActions.getCommentList(article.id));
        }
    } catch(e) {
        console.error(e);
        yield put(commentActions.deleteCommentFail(e.response));
        yield alert(`삭제 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

// action 호출을 감시하는 watch 함수
function* watchGetCommentList() {
    while(true) {
        const action = yield take(commentActions.getCommentList);
        yield call(asyncGetCommentList, action);
    }
}

function* watchInsertComment() {
    while(true) {
        const action = yield take(commentActions.insertComment);
        yield call(asyncInsertComment, action);
    } 
}

function* watchDeleteComment() {
    while(true) {
        const action = yield take(commentActions.deleteComment);
        yield call(asyncDeleteComment, action);
    }
}

export default function* commentSaga()
{
    yield all([fork(watchGetCommentList), fork(watchInsertComment), fork(watchDeleteComment)]);
}