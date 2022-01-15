import axios from 'axios';
// import puppeteer from 'puppeteer';
import {
  UPLOAD_BOARD,
  GET_BOARD,
  LIST_BOARD,
  DELETE_BOARD,
  ISAUTHOR_BOARD,
  UPDATE_BOARD,
  LIST_COIN,
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
export function listBoard({ page: currentPage, coinName: coinNameKor }) {
  const request = axios
    .post('/api/board/getBoard', { page: currentPage, coinName: coinNameKor })
    .then(response => response.data);

  return {
    type: LIST_BOARD,
    payload: request,
  };
}

// // 코인정보
// export function listCoin(coinSym) {
//   //url 'https://xangle.io/project/BTC/profile'
//   const loadJsSite = async (url) => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     const desc = await page.$eval('.desc', el => el.innerText)
//     return (desc)
//     await browser.close();
//   };

//   loadJsSite(`https://xangle.io/project/${coinSym}/profile`)
//     .then((data) => {
//       console.log(typeof (data))
//       res.send(data)
//       // const request = axios
//       //     .post(`/api/board/`)
//       //     .then(response => response.data);

//       // return {
//       //     type: LIST_COIN,
//       //     payload: request,
//       // };
//     })
// }

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
