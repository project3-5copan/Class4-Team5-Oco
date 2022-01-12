import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReply } from 'modules/actions/reply';
import styled from 'styled-components';

const DeleteButton = styled.button`
  color: #ff0200;
  font-size: 12px;
`;

function DeleteReply(props) {
  const dispatch = useDispatch();
  const UserId = localStorage.getItem('userId');
  const ReplyId = props.id;

  const onDelete = () => {
    let confirmDelete = window.confirm('대댓글을 삭제하시겠습니까 ?');
    confirmDelete &&
      dispatch(deleteReply(UserId, ReplyId)).then(response => {
        if (response.payload.success) {
          alert('대댓글을 삭제했습니다.');
          props.onRemove(response.payload.result._id);
        } else {
          alert('대댓글 삭제에 실패했습니다.');
        }
      });
  };

  return <DeleteButton onClick={onDelete}>대댓글 삭제</DeleteButton>;
}

export default withRouter(DeleteReply);