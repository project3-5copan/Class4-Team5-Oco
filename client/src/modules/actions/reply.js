import axios from 'axios';
import { UPLOAD_REPLY, GET_REPLY, DELETE_REPLY } from './types';

// 대댓글 등록
export function uploadReply(Reply) {
  const request = axios
    .post('/api/reply/upload', Reply)
    .then(response => response.data);

  return {
    type: UPLOAD_REPLY,
    payload: request,
  };
}

// 대댓글 보기
export function getReply(Reply) {
  const request = axios
    .post('/api/reply', Reply)
    .then(response => response.data);

  return {
    type: GET_REPLY,
    payload: request,
  };
}

// 대댓글 삭제
export function deleteReply(UserId, ReplyId) {
  const request = axios
    .delete(`/api/reply/${UserId}/${ReplyId}`)
    .then(response => response.data);

  return {
    type: DELETE_REPLY,
    payload: request,
  };
}
