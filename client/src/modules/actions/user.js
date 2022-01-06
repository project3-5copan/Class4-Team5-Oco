import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  CHECK_USER,
  WITHDRAWAL_USER,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_GITHUB,
  GET_EMAIL,
  GET_GITHUB,
  GET_MYCOMMENT,
  GET_MYBOARD,
  GET_MYREPLY,
} from './types';

// 로그인
export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/user/login', dataToSubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

// 이메일 중복확인
export function checkUser(dataToSubmit) {
  const request = axios
    .post(`/api/user/checkEmail`, { email: dataToSubmit })
    .then(response => response.data);

  return {
    type: CHECK_USER,
    payload: request,
  };
}

// 회원가입
export function registerUser(dataToSubmit) {
  const request = axios
    .post('/api/user/register', dataToSubmit)
    .then(response => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

// 유저정보
export function auth() {
  const request = axios.get('/api/auth').then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

// 회원탈퇴
export function withdrawalUser(user) {
  const request = axios
    .post('/api/user/withdrawal', user)
    .then(response => response.data);

  return {
    type: WITHDRAWAL_USER,
    payload: request,
  };
}

// 이메일 변경
export function updateEmail(email) {
  const request = axios
    .post('/api/user/update/email', email)
    .then(response => response.data);

  return {
    type: UPDATE_EMAIL,
    payload: request,
  };
}

// 비밀번호 변경
export function updatePassword(user) {
  const request = axios
    .post('/api/user/update/password', user)
    .then(response => response.data);

  return {
    type: UPDATE_PASSWORD,
    payload: request,
  };
}

// 깃헙주소 변경
export function updateGithub(user) {
  const request = axios
    .post('/api/user/update/github', user)
    .then(response => response.data);

  return {
    type: UPDATE_GITHUB,
    payload: request,
  };
}

// 이메일 주소 조회
export function getEmail(userId) {
  const request = axios
    .post('/api/user/myEmail', userId)
    .then(response => response.data);

  return {
    type: GET_EMAIL,
    payload: request,
  };
}

// 깃헙 주소 조회
export function getGithub(userId) {
  const request = axios
    .post('/api/user/myGithub', userId)
    .then(response => response.data);

  return {
    type: GET_GITHUB,
    payload: request,
  };
}

// 내가 쓴 게시글 조회
export function getMyBoard({ userFrom: userFrom }) {
  const request = axios
    .post('/api/user/myBoard', { userFrom: userFrom })
    .then(response => response.data);

  return {
    type: GET_MYBOARD,
    payload: request,
  };
}

// 내가 쓴 댓글 조회
export function getMyComment({ userFrom: userFrom }) {
  const request = axios
    .post('/api/user/myComment', { userFrom: userFrom })
    .then(response => response.data);

  return {
    type: GET_MYCOMMENT,
    payload: request,
  };
}

// 내가 쓴 대댓글 조회
export function getMyReply({ userFrom: userFrom }) {
  const request = axios
    .post('/api/user/myReply', { userFrom: userFrom })
    .then(response => response.data);

  return {
    type: GET_MYREPLY,
    payload: request,
  };
}
