import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMyBoard } from 'modules/actions/user';
import { updateBoard } from 'modules/actions/board';
import AddBoard from 'components/Board/Section/Board/AddBoard';
import styled from 'styled-components';
import BoardTextarea from 'components/Board/Section/Board/BoardTextarea';
import BoardInput from 'components/Board/Section/Board/BoardInput';

function MyBoardList({ history }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [MyBoard, setMyBoard] = useState([]);
  const [show, setShow] = useState(false);
  const [boardId, getBoardId] = useState('');
  const [inputs, setInput] = useState({
    boardTitle: '',
    boardContent: '',
  });
  const { boardTitle, boardContent } = inputs;
  const onChange = e => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = id => {
    setMyBoard(MyBoard.filter(MyBoard => MyBoard._id !== id));
    history.push('/mypage/boardlist');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!boardTitle) {
      alert('제목을 작성해주세요.');
      return;
    } else if (!boardContent) {
      alert('내용을 작성해주세요.');
      return;
    } else if (boardContent.length > 300) {
      alert('내용을 300자 이내로 작성해주세요.');
      return;
    }
    dispatch(
      updateBoard(userFrom, boardId, {
        boardTitle: boardTitle,
        boardContent: boardContent,
      }),
    ).then(response => {
      if (!response.payload.success) {
        alert('게시글 수정에 실패했습니다.');
      } else {
        if (response.payload.success) {
          alert('게시글이 수정되었습니다.');
          window.location.replace('/mypage/boardList');
        } else {
          alert(response.payload.message);
        }
      }
    });
  };

  useEffect(() => {
    dispatch(getMyBoard({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        setMyBoard(response.payload.boards);
      } else {
        alert('게시글 정보를 가져오는데 실패했습니다.');
      }
    });
  }, []);

  return (
    <>
      {show && (
        <BoardWriteForm onSubmit={onSubmit}>
          <ul>
            <li>
              <BoardInput
                name="boardTitle"
                placeholder="제목을 작성해주세요"
                value={boardTitle}
                onChange={onChange}
              />
            </li>
            <li>
              <BoardTextarea
                name="boardContent"
                placeholder="내용을 작성해주세요."
                value={boardContent}
                onChange={onChange}
              />
            </li>
            <li>
              <BoardButton type="submit" onClick={onSubmit}>
                수정
              </BoardButton>
            </li>
          </ul>
        </BoardWriteForm>
      )}
      {MyBoard.length === 0 && (
        <NothingBox>
          <NothingAlert>게시글 목록이 없습니다.</NothingAlert>
        </NothingBox>
      )}
      {MyBoard &&
        MyBoard.map((board, index) => {
          return (
            <React.Fragment key={index}>
              <BoardUl>
                <AddBoard
                  href="{`../board/${board._id}`}"
                  id={board._id}
                  user={board.userFrom}
                  time={board.createdAt}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                  onRemove={onRemove}
                />
                <EditButton
                  onClick={() => {
                    getBoardId(board._id);
                    setShow(!show);
                  }}
                >
                  수정
                </EditButton>
              </BoardUl>
            </React.Fragment>
          );
        })}
    </>
  );
}

export default withRouter(MyBoardList);

const BoardWriteForm = styled.form`
  display: flex;
  justify-content: center;
`;

const BoardButton = styled.button`
  border-radius: 8px;
  font-weight: 600;
  width: 450px;
  height: 30px;
  padding-left: 30px;
  letter-spacing: 20px;
  text-align: center;
  background-color: #1a83ff;
  color: #fff;
  &:active {
    opacity: 0.7;
  }
  margin-bottom: 30px;
`;

const EditButton = styled.button`
  color: #ff0200;
  font-size: 12px;
  top: 30px;
  right: 48px;
  position: absolute;
`;

const BoardUl = styled.ul`
  position: relative;
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
