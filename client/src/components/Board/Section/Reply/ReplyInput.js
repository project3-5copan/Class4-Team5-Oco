import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AddReply from './AddReply';
import { useDispatch } from 'react-redux';
import { uploadReply, getReply } from 'modules/actions/reply';
import 'styles/board/board.css';
import styled from 'styled-components';

const ReplyButton = styled.button`
  border-radius: 8px;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  width: 90px;
  height: 35px;
  text-align: center;
  background-color: #ff0200;
  color: #fff;
  &active {
    opacity: 0.7;
  }
`;

const FormBox = styled.form`
  display: flex;
  justify-content: flex-end;
`;

const ReplyTotalBox = styled.div`
  padding: 0 0 50px 50px;
`;

const ReplyInput = function ({
  id,
  name,
  placeholder,
  userFrom,
  writerFrom,
  boardId,
}) {
  const dispatch = useDispatch();
  const CommentId = id;
  const replyWriter = writerFrom;
  const [Value, setValue] = useState('');
  const [Replies, setReplies] = useState([]);
  const [ReplyCounts, setReplyCounts] = useState('');
  const onChange = e => {
    setValue(e.currentTarget.value);
  };
  let variables = {
    userFrom: userFrom,
    commentFrom: CommentId,
    replyContent: Value,
    replyWriter: replyWriter,
  };

  const FetchReply = () => {
    dispatch(getReply(variables)).then(response => {
      if (response.payload.success) {
        setReplies(response.payload.replies);
        setReplyCounts(response.payload.replyCounts);
      } else {
        alert('대댓글을 조회할 수 없습니다.');
      }
    });
  };

  useEffect(() => {
    let abortController = new AbortController();
    const fetchData = async () => {
      await FetchReply();
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (!Value) {
      alert('대댓글을 작성해주세요.');
      return;
    }
    dispatch(uploadReply(variables)).then(response => {
      alert('대댓글이 등록되었습니다.');
      setValue('');
      FetchReply();
      window.location.replace(`${window.location.pathname}`);
    });
  };

  const onRemoveReply = id => {
    setReplies(Replies.filter(Replies => Replies._id !== id));
  };

  return (
    <>
      <ReplyTotalBox>
        <FormBox onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              id={id}
              name={name}
              placeholder={placeholder}
              value={Value}
              onChange={onChange}
              className="replyInput"
            />
            <ReplyButton type="submit" onClick={onSubmit}>
              대댓글 등록
            </ReplyButton>
          </div>
        </FormBox>
        {Replies &&
          Replies.map((reply, index) => {
            return (
              <React.Fragment key={index}>
                <AddReply
                  id={reply._id}
                  boardId={boardId}
                  ReplyCounts={ReplyCounts}
                  user={reply.userFrom}
                  time={reply.createdAt}
                  writer={reply.replyWriter}
                  content={reply.replyContent}
                  onRemove={onRemoveReply}
                />
              </React.Fragment>
            );
          })}
      </ReplyTotalBox>
    </>
  );
};

export default withRouter(ReplyInput);
