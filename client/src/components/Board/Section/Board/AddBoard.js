import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UpdateTime from 'library/utils/updateTime';
import DeleteBoard from './DeleteBoard';
import LikeButton from '../Like/LikeButton';
import CommentButton from '../Comment/CommentButton';
import ShowInfo from '../ShowInfo/ShowInfo';
import Coin from 'assests/coin.png';
import styled from 'styled-components';


const GithubImg = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const AddBoardBox = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const AddBoardWriter = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Writer = styled.span`
  width: 60px;
  height: 25px;
  font-size: 14px;
  padding-top: 3px;
  font-weight: 500;
  color: #fff;
  background-color: #1a83ff;
  border-radius: 5px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

const OnlyWriter = styled.span`
  width: 60px;
  height: 25px;
  font-size: 14px;
  padding-top: 3px;
  font-weight: 500;
  color: #fff;
  background-color: #1a83ff;
  border-radius: 5px;
  margin: 0 auto;
  margin: 5px 0px 10px 0px;
  text-align: center;
`;
const Field = styled.span`
  font-size: 12px;
  width: 60px;
  height: 30px;
  display: flex;
  padding-top: 9px;
  color: #aaa;
`;

const TimeBox = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding-top: 3px;
  justify-content: flex-end;
  color: #aaa;
  font-weight: 600;
`;

const BoardHeader = styled.span`
  width: 97%;
  display: flex;
  justify-content: space-between;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.li`
  width: 150px;
  margin-left: 2px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 20px;
  padding-left: 10px;
`;
const Content = styled.div`
  font-size: 13px;
  padding-left: 10px;
`;

const DeleteBoardBox = styled.div``;


function AddBoard(props) {
  const currentUser = window.localStorage.getItem('userId');
  const [showInfo, setShowInfo] = useState(false);
  const showHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <AddBoardBox key={props.id}>
        <div>
          <BoardHeader style={{ display: 'flex' }}>
            {props.user.field === undefined ? (
              <OnlyWriter>{props.writer}</OnlyWriter>
            ) : (
              <ul>
                <AddBoardWriter onClick={showHandler}>
                  <NameBox>
                    <Writer>{props.writer}</Writer>
                    <GithubImg
                      src={Coin}
                      alt="Coin"
                      onClick={() =>
                        window.open(`${props.user.github}`, '_blank')
                      }
                    />
                    <Field>{props.user.field}</Field>
                  </NameBox>
                </AddBoardWriter>
                <InfoBox>
                  {showInfo && (
                    <ShowInfo
                      email={props.user.email}
                      gender={props.user.gender}
                      userDescription={props.user.userDescription}
                    />
                  )}
                </InfoBox>
              </ul>
            )}
            <ul>
              <li>
                <TimeBox>
                  <UpdateTime time={props.time} />
                </TimeBox>
              </li>
              <li>
                <DeleteBoardBox>
                  {props.user !== undefined ? (
                    props.user === currentUser ? (
                      <>
                        <DeleteBoard
                          board={props.id}
                          user={props.user}
                          history={props.history}
                          onRemove={props.onRemove}
                        />
                      </>
                    ) : null
                  ) : props.user._id === currentUser ? (
                    <>
                      <DeleteBoard
                        board={props.id}
                        user={props.user}
                        history={props.history}
                        onRemove={props.onRemove}
                      />
                    </>
                  ) : null}
                </DeleteBoardBox>
              </li>
            </ul>
          </BoardHeader>
        </div>
        <Link to={`/board/${props.id}`}>
          <Title>{props.title}</Title>
          <Content>{props.content}</Content>
        </Link>
        <div style={{ textAlign: 'right' }}>
          <LikeButton
            boardId={props.id}
            boardWriter={props.writer}
            boardTitle={props.title}
            boardContent={props.content}
          />
          <Link to={`/board/${props.id}`}>
            <CommentButton boardId={props.id} />
          </Link>
        </div>
      </AddBoardBox>
    </>
  );
}

export default withRouter(AddBoard);