import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoard } from 'modules/actions/board';
import styled from 'styled-components';

const DeleteButton = styled.button`
  color: #ff0200;
  font-size: 12px;
  width: 50px;
  display: flex;
  justify-content: flex-end;
`;

function DeleteBoard(props) {
  const dispatch = useDispatch();
  const UserId = localStorage.getItem('userId');
  const BoardId = props.board;

  const onDelete = () => {
    let confirmDelete = window.confirm('게시글을 삭제하시겠습니까?');
    confirmDelete &&
      dispatch(deleteBoard(UserId, BoardId)).then(response => {
        if (response.payload.success) {
          alert('게시글을 삭제했습니다.');
          props.onRemove(response.payload.result._id);
        } else {
          alert('게시글 삭제에 실패했습니다.');
        }
      });
  };
  return <DeleteButton onClick={onDelete}>삭제</DeleteButton>;
}

export default withRouter(DeleteBoard);