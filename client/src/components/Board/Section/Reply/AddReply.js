import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import UpdateTime from 'library/utils/updateTime';
import DeleteReply from './DeleteReply';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { isauthorBoard } from 'modules/actions/board';

const ReplyBox = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const WriterBox = styled.div`
  margin-top: 5px;
`;

const DeleteBox = styled.div`
  margin-right: 30px;
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

const ReplyLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ReplyUl = styled.ul`
  width: 100%;
`;

const ReplyContent = styled.div`
  margin-right: 10px;
`;

const ReplyLi2 = styled.li`
  display: flex;
  justify-content: flex-end;
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

function AddReply(props) {
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
    let abortController = new AbortController();
    const fetchData = async () => {
      await checkAuthor();
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <ReplyBox key={props.id}>
        <ReplyUl>
          <ReplyLi>
            <DeleteBox>
              {props.user === UserId ? (
                <DeleteReply
                  id={props.id}
                  user={props.user}
                  onRemove={props.onRemove}
                />
              ) : null}
            </DeleteBox>
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
          </ReplyLi>
          <ReplyLi2>
            <ReplyContent>{props.content}</ReplyContent>
          </ReplyLi2>
          <TimeBox>
            <UpdateTime time={props.time} />
          </TimeBox>
        </ReplyUl>
      </ReplyBox>
    </>
  );
}

export default withRouter(AddReply);