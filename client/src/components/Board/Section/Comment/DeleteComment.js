import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteComment } from 'modules/actions/comment';
import styled from 'styled-components';

function DeleteComment(props) {
  const dispatch = useDispatch();
  const UserId = localStorage.getItem('userId');
  const CommentId = props.id;

  const onDelete = () => {
    let confirmDelete = window.confirm('댓글을 삭제하시겠습니까 ?');
    confirmDelete &&
      dispatch(deleteComment(UserId, CommentId)).then(response => {
        if (response.payload.success) {
          alert('댓글을 삭제했습니다.');
          props.onRemove(response.payload.result._id);
        } else {
          alert('댓글 삭제에 실패했습니다.');
        }
      });
  };

  return <DeleteButton onClick={onDelete}>댓글 삭제</DeleteButton>;
}

export default withRouter(DeleteComment);

const DeleteButton = styled.button`
  color: #ff0200;
  font-size: 12px;
`;
