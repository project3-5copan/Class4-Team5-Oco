import axios from 'axios';
import {
  UPLOAD_COMMENT,
  GET_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from './types';

// 댓글 등록
export function uploadComment(Comment) {
  const request = axios
    .post('/api/comment/upload', Comment)
    .then(response => response.data);

  return {
    type: UPLOAD_COMMENT,
    payload: request,
  };
}

// 게시글에 달린 댓글 조회
export function getComment(Comment) {
  const request = axios
    .post('/api/comment/', Comment)
    .then(response => response.data);

  return {
    type: GET_COMMENT,
    payload: request,
  };
}

// 댓글 삭제
export function deleteComment(UserId, CommentId) {
  const request = axios
    .delete(`/api/comment/${UserId}/${CommentId}`)
    .then(response => response.data);

  return {
    type: DELETE_COMMENT,
    payload: request,
  };
}

// 댓글 수정
export function updateComment(
  UserId,
  CommentId,
  { commentContent: commentContent },
) {
  const request = axios
    .patch(`/api/comment/${UserId}/${CommentId}`, {
      commentContent: commentContent,
    })
    .then(response => response.data);

  return {
    type: UPDATE_COMMENT,
    payload: request,
  };
}
