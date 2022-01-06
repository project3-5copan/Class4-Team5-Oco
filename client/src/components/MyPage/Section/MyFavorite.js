import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likeList } from 'modules/actions/like';
import MyLikeBoard from 'components/Board/Section/Like/MyLikeBoard';
import styled from 'styled-components';

function myFavorite() {
  const dispatch = useDispatch();
  const [myFavorites, setMyFavorites] = useState([]);

  const getMyFavorite = () => {
    const userFrom = localStorage.getItem('userId');
    dispatch(likeList({ userFrom: userFrom }))
      .then(response => {
        setMyFavorites(response.payload.likes);
      })
      .catch(e => alert('좋아요한 게시글을 불러오는데 실패했습니다,'));
  };

  useEffect(() => {
    getMyFavorite();
  }, []);

  return (
    <>
      {myFavorites.length === 0 && (
        <NothingBox>
          <NothingAlert>좋아요한 게시글이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {myFavorites &&
        myFavorites.map((likes, index) => {
          return (
            <React.Fragment key={index}>
              <MyLikeBoard
                href="{`../board/${likes.boardFrom}`}"
                id={likes.boardFrom}
                time={likes.createdAt}
                writer={likes.boardWriter}
                title={likes.boardTitle}
                content={likes.boardContent}
              />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(myFavorite);

const NothingBox = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const NothingAlert = styled.p`
  font-size: 25px;
  color: #ff0200;
`;
