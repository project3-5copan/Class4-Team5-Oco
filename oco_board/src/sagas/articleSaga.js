import { all, call, retry, fork, put, take, select, getContext } from 'redux-saga/effects';
import { articleActions } from '../slices/articleSlice';
import axios from '../utils/axios';
import history from '../utils/history';
import qs from "query-string";

const SECOND = 1000;

// api 서버 연결 주소
function apiGetArticle(articleId) {
    return axios.get(`articles/${articleId}`);
}

function apiGetArticleList(requestParams) {
    return axios.get(`articles?${qs.stringify(requestParams)}`);
}

function apiPutArticle(requestBody) {
    return axios.put(`articles/${requestBody?.id}`, requestBody);
}

function apiPostArticle(requestBody) {
    return axios.post(`articles/`, requestBody);
}

function apiDeleteArticle(articleId) {
    return axios.delete(`articles/${articleId}`);
}

// api 서버 연결 후 action 호출
function* asyncGetArticleList(action) {
    try {
        // const response = yield call(apiGetArticleList, { boardId: action.payload });
        const response = yield retry(3, 10 * SECOND, apiGetArticleList, { boardId: action.payload });
        if (response?.status === 200) {
            yield put(articleActions.getArticleListSuccess(response));
        } else {
            yield put(articleActions.getArticleListFail(response));
        }
    } catch(e) {
        yield put(articleActions.getArticleListFail(e.response));
    }
}

function* asyncGetArticle(action) {
    try {
        const response = yield call(apiGetArticle, action.payload);
        if (response?.status === 200) {
            yield put(articleActions.getArticleSuccess()); // 조회 성공확인만 판단하는 용도로 남김
            yield put(articleActions.updateArticleViews(response.data));
        } else {
            yield put(articleActions.getArticleFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(articleActions.getArticleFail(e.response));
    }
}

function* asyncUpdateArticleViews(action) {
    try {
        const response = yield call(apiPutArticle, {
            ...action.payload,
            views: parseInt(action.payload?.views ?? 0) + 1,
            updateDate: Date.now()
        });
        if (response?.status === 200) {
            yield put(articleActions.updateArticleViewsSuccess(response));
        } else {
            yield put(articleActions.updateArticleViewsFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(articleActions.updateArticleViewsFail(e?.response));
    }
}

function* asyncPostArticle(action) {
    try {
        // const history = yield getContext("history"); // react-router-dom 의 BrowserRouter 에서는 안 됨
        const response = yield call(apiPostArticle, {
            ...action.payload,
            id: 0,
            views: 0,
            insertDate: Date.now(),
            updateDate: Date.now()
        });
        if (response?.status === 201) {
            yield put(articleActions.postArticleSuccess());
            history.push(`/article/${response?.data?.id ?? 0}`);
        } else {
            yield put(articleActions.postArticleFail(response));
            yield alert(`등록실패 \n Error: ${response.status}, ${response.statusText}`);
        }
    } catch(e) {
        console.error(e);
        yield put(articleActions.postArticleFail(e?.response));
        yield alert(`등록실패 \n Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

function* asyncSetArticle(action) {
    try {

        const response = yield call(apiGetArticle, action.payload?.articleId);
        if (response?.status === 200) {
            yield call(action.payload?.setArticle, response?.data ?? {});
        } else {
            yield alert(`불러오기 실패 Error: ${response.status}, ${response.statusText}`);
            history.goBack();
        }
    } catch(e) {
        console.error(e);
        yield alert(`불러오기 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);
        history.goBack();
    }
}

function* asyncPutArticle(action) {
    try {
        const response = yield call(apiPutArticle, {
            ...action.payload,
            updateData: Date.now()
        });
        if (response?.status === 200) {
            yield put(articleActions.putArticleSuccess());
            history.push(`/article/${response?.data?.id ?? 0}`);
        } else {
            yield put(articleActions.putArticleFail(response));
            yield alert(`수정실패 \n Error: ${response.status}, ${response.statusText}`);
        }
    } catch(e) {
        console.error(e);
        yield put(articleActions.putArticleFail(e?.response));
        yield alert(`수정실패 \n Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

function* asyncDeleteArticle() {
    try {
        const article = yield select((state) => state.articleReducer.article);
        const response = yield call(apiDeleteArticle, article?.id ?? 0);
        if (response?.status === 200) {
            yield put(articleActions.deleteArticleSuccess());
            alert("삭제되었습니다!");
            history.push(`/board/${article?.boardId ?? 0}`);
        } else {
            yield put(articleActions.deleteArticleFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(articleActions.deleteArticleFail(e?.response));
        yield alert(`삭제실패 \n Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

// action 호출을 감시하는 watch 함수
function* watchGetArticleList() {
    while(true) {
        const action = yield take(articleActions.getArticleList);
        yield call(asyncGetArticleList, action);
    }
}

function* watchGetArticle() {
    while(true) {
        const action = yield take(articleActions.getArticle);
        yield call(asyncGetArticle, action);
    } 
}

function* watchUpdateArticleViews() {
    while(true) {
        const action = yield take(articleActions.updateArticleViews);
        yield call(asyncUpdateArticleViews, action);
    }
}

function* watchPostArticle() {
    while(true) {
        const action = yield take(articleActions.postArticle);
        yield call(asyncPostArticle, action);
    }
}

function* watchSetArticle() {
    while(true) {
        const action = yield take(articleActions.setArticle);
        yield call(asyncSetArticle, action);
    }
}

function* watchPutArticle() {
    while(true) {
        const action = yield take(articleActions.putArticle);
        yield call(asyncPutArticle, action);
    }
}

function* watchDeleteArticle() {
    while(true) {
        yield take(articleActions.deleteArticle);
        yield call(asyncDeleteArticle);
    }
}

export default function* articleSaga()
{
    yield all([fork(watchGetArticleList), fork(watchGetArticle),
        fork(watchUpdateArticleViews), fork(watchPostArticle),
        fork(watchSetArticle), fork(watchPutArticle), fork(watchDeleteArticle)]);
}