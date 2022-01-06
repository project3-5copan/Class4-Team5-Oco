import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMyComment } from 'modules/actions/user';
import AddBoard from 'components/Board/Section/Board/AddBoard';
import styled from 'styled-components';

function MyComment() {
  const dispatch = useDispatch();
  const [CommentsFrom, setCommentsFrom] = useState([]);

  const onRemove = id => {
    setCommentsFrom(
      CommentsFrom.filter(CommentsFrom => CommentsFrom._id !== id),
    );
  };

  useEffect(() => {
    const userFrom = localStorage.getItem('userId');
    dispatch(getMyComment({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        saveOptions(response.payload.comments);
      } else {
        alert('댓글을 불러오는데 실패했습니다.');
      }
    });
  }, []);

  const saveOptions = comments => {
    const commentsList = [];

    comments.forEach(element => {
      commentsList.push(element.boardFrom);
    });
    setCommentsFrom(
      [...new Set(commentsList.map(JSON.stringify))].map(JSON.parse),
    );
  };

  return (
    <>
      {CommentsFrom.length === 0 && (
        <NothingBox>
          <NothingAlert>댓글 목록이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {CommentsFrom &&
        CommentsFrom.map((board, index) => {
          return (
            <React.Fragment key={index}>
              <AddBoard
                id={board._id}
                user={board.userFrom}
                time={board.createdAt}
                writer={board.boardWriter}
                title={board.boardTitle}
                content={board.boardContent}
                onRemove={onRemove}
              />
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(MyComment);

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
