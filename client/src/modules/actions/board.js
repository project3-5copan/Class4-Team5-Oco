import axios from 'axios';
import {
  UPLOAD_BOARD,
  GET_BOARD,
  LIST_BOARD,
  DELETE_BOARD,
  ISAUTHOR_BOARD,
  UPDATE_BOARD,
} from './types';

// 게시글 작성
export function uploadBoard(Board) {
  const request = axios
    .post('/api/board/upload', Board)
    .then(response => response.data);

  return {
    type: UPLOAD_BOARD,
    payload: request,
  };
}

// 게시글 상세보기
export function getBoard(BoardId) {
  const request = axios
    .post(`/api/board/${BoardId}`, BoardId)
    .then(response => response.data);

  return {
    type: GET_BOARD,
    payload: request,
  };
}

// 게시글 리스트
export function listBoard({ page: currentPage }) {
  const request = axios
    .post('/api/board/getBoard', { page: currentPage })
    .then(response => response.data);

  return {
    type: LIST_BOARD,
    payload: request,
  };
}

// 게시글 작성자 확인
export function isauthorBoard(UserId, BoardId) {
  const request = axios
    .post(`/api/board/${UserId}/${BoardId}`)
    .then(response => response.data);

  return {
    type: ISAUTHOR_BOARD,
    payload: request,
  };
}

// 게시글 삭제
export function deleteBoard(UserId, BoardId) {
  const request = axios
    .delete(`/api/board/${UserId}/${BoardId}`)
    .then(response => response.data);

  return {
    type: DELETE_BOARD,
    payload: request,
  };
}

// 게시글 수정
export function updateBoard(
  userFrom,
  boardId,
  { boardTitle: boardTitle, boardContent: boardContent },
) {
  const request = axios
    .patch(`/api/board/${userFrom}/${boardId}`, {
      boardTitle: boardTitle,
      boardContent: boardContent,
    })
    .then(response => response.data);

  return {
    type: UPDATE_BOARD,
    payload: request,
  };
}
