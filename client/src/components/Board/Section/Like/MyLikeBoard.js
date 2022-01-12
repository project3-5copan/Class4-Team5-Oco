import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UpdateTime from 'library/utils/updateTime';
import DeleteBoard from 'components/Board/Section/Board/DeleteBoard';
import LikeButton from '../Like/LikeButton';
import CommentButton from '../Comment/CommentButton';
import Coin from 'assests/coin.png';
import styled from 'styled-components';

const GithubImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const AddBoardBox = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const Writer = styled.span`
  width: 80px;
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
  margin-bottom: 10px;
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

function MyLikeBoard(props) {
  const currentUser = window.localStorage.getItem('userId');

  return (
    <>
      <AddBoardBox key={props.id}>
        <div>
          <BoardHeader style={{ display: 'flex' }}>
            <NameBox>
              <Writer>{props.writer}</Writer>
              <GithubImg              
                src={Coin}
                alt="Coin"
                onClick={() => window.open(`${props.user.github}`, '_blank')}
              />
            </NameBox>
            <TimeBox>
              <UpdateTime time={props.time} />
            </TimeBox>
            <DeleteBoardBox>
              {props.user === currentUser ? (
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

export default withRouter(MyLikeBoard);