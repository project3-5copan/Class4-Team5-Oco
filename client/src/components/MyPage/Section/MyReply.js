import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddComment from 'components/Board/Section/Comment/AddComment';
import ReplyInput from 'components/Board/Section/Reply/ReplyInput';
import { getMyReply } from 'modules/actions/user';
import styled from 'styled-components';
import Reply from 'assests/Reply.png';

function MyReply() {
  const dispatch = useDispatch();
  const [RepliesFrom, setRepliesFrom] = useState([]);
  const [show, setShow] = useState(false);
  const showHandler = () => setShow(!show);
  const [commentId, getCommentId] = useState('');
  const onRemove = id => {
    setRepliesFrom(RepliesFrom.filter(RepliesFrom => RepliesFrom._id !== id));
  };

  useEffect(() => {
    const userFrom = localStorage.getItem('userId');
    dispatch(getMyReply({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        saveOptions(response.payload.replies);
      } else {
        alert('대댓글을 불러오는데 실패했습니다.');
      }
    });
  }, []);

  const saveOptions = replies => {
    const repliesList = [];
    replies.forEach(element => {
      repliesList.push(element.commentFrom);
    });
    setRepliesFrom(
      [...new Set(repliesList.map(JSON.stringify))].map(JSON.parse),
    );
  };

  return (
    <>
      {RepliesFrom.length === 0 && (
        <NothingBox>
          <NothingAlert>대댓글 목록이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {RepliesFrom &&
        RepliesFrom.map((comment, index) => {
          return (
            <CommentUl key={index}>
              <React.Fragment key={index}>
                <AddComment
                  id={comment._id}
                  user={comment.userFrom}
                  time={comment.createdAt}
                  writer={comment.commentWriter}
                  title={comment.commentTitle}
                  content={comment.commentContent}
                  onRemove={onRemove}
                />
                <ReplyImg
                  src={Reply}
                  onClick={() => {
                    showHandler();
                    getCommentId(comment._id);
                  }}
                />
                <li>
                  {show && comment._id === commentId && (
                    <ReplyInput
                      id={commentId}
                      name="Reply"
                      placeholder="대댓글을 작성해주세요."
                      userFrom={comment.userFrom}
                      writerFrom={comment.commentWriter}
                    />
                  )}
                </li>
              </React.Fragment>
            </CommentUl>
          );
        })}
    </>
  );
}

export default withRouter(MyReply);

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

const CommentUl = styled.ul`
  position: relative;
`;

const ReplyImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
`;
