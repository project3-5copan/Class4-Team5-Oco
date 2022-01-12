import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UpdateTime from 'library/utils/updateTime';
import DeleteComment from './DeleteComment';
import { useDispatch } from 'react-redux';
import { isauthorBoard } from 'modules/actions/board';
import styled from 'styled-components';

const AddCommentBox = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WriterBox = styled.div`
  margin-top: 5px;
`;

const Writer = styled.span`
  height: 25px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #1a83ff;
  border-radius: 5px;
  text-align: center;
  margin-top: 5px;
  & > span {
    font-size: 11px;
    margin-left: 5px;
  }
  padding: 3px 5px;
`;

const Visitor = styled.span`
  height: 25px;
  font-size: 14px;
  background-color: #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 3px 5px;
`;

const DeleteBox = styled.div`
  margin-right: 30px;
`;

const CommentContent = styled.div`
  margin: 10px 0 10px 20px;
`;

const TimeBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding-top: 3px;
  justify-content: flex-start;
  color: #aaa;
  font-weight: 600;
  margin-left: 10px;
`;


function AddComment(props) {
  const dispatch = useDispatch();
  const [isAuthor, setIsAuthor] = useState(false);
  const UserId = localStorage.getItem('userId');

  const checkAuthor = () => {
    dispatch(isauthorBoard(props.user, props.boardId)).then(response => {
      if (response.payload.success) {
        setIsAuthor(true);
      } else {
        setIsAuthor(false);
      }
    });
  };

  useEffect(() => {
    checkAuthor();
  }, []);

  return (
    <>
      <AddCommentBox key={props.id}>
        <NameBox>
          <WriterBox>
            {isAuthor ? (
              <Writer>
                {props.writer}
                <span>(작성자)</span>
              </Writer>
            ) : (
              <Visitor>{props.writer}</Visitor>
            )}
          </WriterBox>
          <DeleteBox>
            {props.user === UserId ? (
              <DeleteComment
                id={props.id}
                user={props.user}
                onRemove={props.onRemove}
              />
            ) : null}
          </DeleteBox>
        </NameBox>
        <CommentContent>{props.content}</CommentContent>
        <TimeBox>
          <UpdateTime time={props.time} />
        </TimeBox>
      </AddCommentBox>
    </>
  );
}

export default withRouter(AddComment);