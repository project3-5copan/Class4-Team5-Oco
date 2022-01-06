import axios from 'axios';
import {
  GET_LIKE,
  ISCHECK_LIKE,
  SUBTRACTION_LIKE,
  ADDITION_LIKE,
  LIKE_LIST,
} from './types';

// 좋아요 보기
export function getLike(Like) {
  const request = axios
    .post('/api/like/likeCounts', Like)
    .then(response => response.data);

  return {
    type: GET_LIKE,
    payload: request,
  };
}

// 좋아요 클릭 확인 (1회)
export function ischeckLike(Like) {
  const request = axios
    .post('/api/like/liked', Like)
    .then(response => response.data);

  return {
    type: ISCHECK_LIKE,
    payload: request,
  };
}

// 좋아요 1 차감
export function subtractionLike(Like) {
  const request = axios
    .post('/api/like/dislike', Like)
    .then(response => response.data);

  return {
    type: SUBTRACTION_LIKE,
    payload: request,
  };
}

// 좋아요 1 증가
export function additionLike(Like) {
  const request = axios.post('/api/like', Like).then(response => response.data);

  return {
    type: ADDITION_LIKE,
    payload: request,
  };
}

// 좋아요 리스트
export function likeList({ userFrom: userFrom }) {
  const request = axios
    .post('/api/like/likes', { userFrom: userFrom })
    .then(response => response.data);

  return {
    type: LIKE_LIST,
    payload: request,
  };
}
