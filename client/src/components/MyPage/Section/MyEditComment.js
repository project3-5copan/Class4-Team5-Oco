import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMyComment } from 'modules/actions/user';
import { updateComment } from 'modules/actions/comment';
import AddComment from 'components/Board/Section/Comment/AddComment';
import styled from 'styled-components';

function MyEditComment({ history }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [MyComment, setMyComment] = useState([]);
  const [show, setShow] = useState(false);
  const [commentId, getCommentId] = useState('');
  const [inputs, setInput] = useState({
    commentContent: '',
  });
  const { commentContent } = inputs;
  const onChange = e => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = id => {
    setMyComment(MyComment.filter(MyComment => MyComment._id !== id));
    history.push('/mypage');
  };

  useEffect(() => {
    dispatch(getMyComment({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        setMyComment(response.payload.comments);
      } else {
        alert('댓글을 불러오는데 실패했습니다.');
      }
    });
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(
      updateComment(userFrom, commentId, { commentContent: commentContent }),
    ).then(response => {
      if (!response.payload.success) {
        alert('댓글 수정에 실패했습니다.');
      } else {
        if (response.payload.success) {
          alert('댓글이 수정되었습니다.');
          window.location.replace('/mypage/myComment');
        } else {
          alert(response.payload.message);
        }
      }
    });
  };

  return (
    <>
      {show && (
        <EditForm onSubmit={onSubmit}>
          <input
            name="commentContent"
            placeholder="댓글을 작성해주세요."
            value={commentContent}
            onChange={onChange}
            className="commentInput"
          />
          <CommentButton type="submit" onClick={onSubmit}>
            수정
          </CommentButton>
        </EditForm>
      )}
      {MyComment.length === 0 && (
        <NothingBox>
          <NothingAlert>댓글 목록이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {MyComment &&
        MyComment.map((comment, index) => {
          return (
            <React.Fragment key={index}>
              <CommentUl>
                <AddComment
                  id={comment._id}
                  user={comment.userFrom}
                  time={comment.createdAt}
                  writer={comment.commentWriter}
                  title={comment.commentTitle}
                  content={comment.commentContent}
                  onRemove={onRemove}
                />
                <EditButton
                  onClick={() => {
                    getCommentId(comment._id);
                    setShow(!show);
                  }}
                >
                  수정
                </EditButton>
              </CommentUl>
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(MyEditComment);

const EditButton = styled.button`
  color: #ff0200;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 2.5px;
`;

const CommentUl = styled.ul`
  position: relative;
`;

const CommentButton = styled.button`
  border-radius: 8px;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  width: 70px;
  height: 35px;
  text-align: center;
  background-color: #ff0200;
  color: #fff;
  &:active {
    opacity: 0.7;
  }
`;

const EditForm = styled.form`
  margin-bottom: 20px;
`;

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
