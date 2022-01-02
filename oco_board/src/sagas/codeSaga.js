import { all, call, fork, put, take } from 'redux-saga/effects';
import { codeActions } from '../slices/codeSlice';
import axios from '../utils/axios';

// api 서버 연결 주소
function apiGetCode(codeId) {
    return axios.get(`codes/${codeId}`);
}

function apiGetCodeList() {
    return axios.get(`codes`);
}

function apiPostCode(requestBody) {
    return axios.post(`codes`, requestBody);
}

function apiPutCode(requestBody) {
    return axios.put(`codes/${requestBody?.id}`, requestBody);
}

function apiDeleteCode(codeId) {
    return axios.delete(`codes/${codeId}`);
}

// api 서버 연결 후 action 호출
function* asyncGetCodeList() {
    try {
        const response = yield call(apiGetCodeList);
        if (response?.status === 200) {
            yield put(codeActions.getCodeListSuccess(response));
        } else {
            yield put(codeActions.getCodeListFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(codeActions.getCodeListFail(e.response));
    }
}

function* asyncGetCode(action) {
    try {
        const response = yield call(apiGetCode, action.payload);
        if (response?.status === 200) {
            yield put(codeActions.getCodeSuccess());
        } else {
            yield put(codeActions.getCodeFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(codeActions.getCodeFail(e.response));
    }
}

function* asyncPostCode(action) {
    try {
        const response = yield call(apiPostCode, {
            ...action.payload.code,
            id: 0,
            insertDate: Date.now(),
            updateDate: Date.now()
        });
        if (response?.status === 201) {
            yield put(codeActions.postCodeSuccess());
            alert("등록되었습니다!");
            yield call(action.payload?.setShowCreateCode, false);
            yield put(codeActions.getCodeList());
        } else {
            yield put(codeActions.postCodeFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(codeActions.postCodeFail(e.response));
        yield alert(`등록 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

function* asyncPutCode(action) {
    try {
        const response = yield call(apiPutCode, { ...action.payload, updateDate: Date.now() });
        if (response?.status === 200) {
            yield put(codeActions.putCodeSuccess());
            alert("저장되었습니다!");
            yield put(codeActions.getCodeList());
        } else {
            yield put(codeActions.putCodeFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(codeActions.putCodeFail(e.response));
        yield alert(`저장 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

function* asyncDeleteCode(action) {
    try {
        const response = yield call(apiDeleteCode, action.payload);
        if (response?.status === 200) {
            yield put(codeActions.deleteCodeSuccess());
            alert("삭제되었습니다!");
            yield put(codeActions.getCodeList());
        } else {
            yield put(codeActions.deleteCodeFail(response));
        }
    } catch(e) {
        console.error(e);
        yield put(codeActions.deleteCodeFail(e.response));
        yield alert(`삭제 실패 Error: ${e?.response?.status}, ${e?.response?.statusText}`);
    }
}

// action 호출을 감시하는 watch 함수
function* watchGetCodeList() {
    while(true) {
        yield take(codeActions.getCodeList);
        yield call(asyncGetCodeList);
    }
}

function* watchGetCode() {
    while(true) {
        const action = yield take(codeActions.getCode);
        yield call(asyncGetCode, action);
    }
}

function* watchPostCode() {
    while(true) {
        const action = yield take(codeActions.postCode);
        yield call(asyncPostCode, action);
    }
}

function* watchPutCode() {
    while (true) {
        const action = yield take(codeActions.putCode);
        yield call(asyncPutCode, action);
    }
}

function* watchDeleteCode() {
    while (true) {
        const action = yield take(codeActions.deleteCode);
        yield call(asyncDeleteCode, action);
    }
}

export default function* codeSaga()
{
    yield all([fork(watchGetCodeList), fork(watchGetCode), fork(watchPostCode), fork(watchPutCode), fork(watchDeleteCode)]);
}