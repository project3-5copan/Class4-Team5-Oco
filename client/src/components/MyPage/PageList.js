import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

function PageList() {
  return (
    <>
      <MyPageBox>
        <ul>
          <MyPageTitle>계정</MyPageTitle>
          <MyPageList>
            <li>
              <Link to="/mypage/email">이메일 변경</Link>
            </li>
            <li>
              <Link to="/mypage/password">비밀번호 변경</Link>
            </li>
            <li>
              <Link to="/mypage/github">깃헙주소 변경</Link>
            </li>
          </MyPageList>
        </ul>
        <ul>
          <MyPageTitle>게시판</MyPageTitle>
          <MyPageList>
            <li>
              <Link to="/mypage/boardList">내가 쓴 글(게시글 수정)</Link>
            </li>
            <li>
              <Link to="/mypage/myComment">내 쓴 댓글(댓글 수정)</Link>
            </li>
            <li>
              <Link to="/mypage/comment">내가 댓글 단 글</Link>
            </li>
            <li>
              <Link to="/mypage/reply">내가 대댓글 단 댓글</Link>
            </li>
            <li>
              <Link to="/mypage/favorite">내가 좋아요 누른 글</Link>
            </li>
          </MyPageList>
        </ul>
        <ul>
          <MyPageTitle>기타</MyPageTitle>
          <MyPageList>
            <li>
              <Link to="/mypage/withdrawal">회원탈퇴</Link>
            </li>
          </MyPageList>
        </ul>
      </MyPageBox>
    </>
  );
}

export default withRouter(PageList);

const MyPageBox = styled.div`
  border-radius: 10px;
  width: 600px;
  padding: 50px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const MyPageTitle = styled.li`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-top: 3px;
  font-weight: 600;
  color: #1dcc77;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const MyPageList = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #eee;
`;
