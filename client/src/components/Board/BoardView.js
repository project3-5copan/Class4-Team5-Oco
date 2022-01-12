import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AddBoard from './Section/Board/AddBoard';
import BoardTextarea from './Section/Board/BoardTextarea';
import BoardInput from './Section/Board/BoardInput';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import { uploadBoard, listBoard } from 'modules/actions/board';
import styled from 'styled-components';
import withSelectedCoinName from '../../Container/withSelectedCoinName'

function BoardView({ history, coinNameKor }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userName');
  // const boardName = localStorage.getItem('coinNameKor');
  // const [ boardName, getBoardName ] = useState(coinNameKor)
  const [totalPage, setTotalpage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [Content, setContent] = useState([]);
  const [boardWriter, setBoardWriter] = useState(writerFrom);
  const [inputs, setInput] = useState({
    boardTitle: '',
    boardContent: '',
  });
  const { boardTitle, boardContent } = inputs;
  


  useEffect(() => {
    FetchBoard();
    getBoardName(coinNameKor)
    console.log('coinNameKor:', coinNameKor)
  }, [currentPage, coinNameKor]);

  const FetchBoard = () => {
    dispatch(listBoard({ page: currentPage })).then(response => {
      if (response.payload.success) {
        setContent(response.payload.boards);
        setTotalpage(Math.ceil(response.payload.count / 10));
      } else {
        alert('게시글을 불러올 수 없습니다.');
      }
      alert('fetch boardName: ', coinNameKor)
      console.log('fetch: ', coinNameKor)
    });
  };

  const onChange = e => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const handlePageChange = e => {
    const currentPage = parseInt(e.target.textContent);
    setCurrentPage(currentPage);
  };

  const onRemove = id => {
    setContent(Content.filter(Content => Content._id !== id));
    FetchBoard();
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
    let variables = {
      userFrom: userFrom,
      boardName: boardName,
      boardTitle: boardTitle,
      boardContent: boardContent,
      boardWriter: boardWriter,
    };
    dispatch(uploadBoard(variables)).then(response => {
      if (response.payload.success) {
        setInput({
          boardTitle: '',
          boardContent: '',
        });
        FetchBoard();
      } else {
        alert('게시글 업로드에 실패했습니다.');
      }
    });
  };

  return (
    <>
      <BoardBox>
        <BoardWriteForm onSubmit={onSubmit}>
          <ul>
            <li>
              <BoardInput
                name="boardTitle"
                placeholder="제목을 작성해주세요."
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
                작성
              </BoardButton>
            </li>
            <li>
              <Alert>게시글 수정 및 삭제는 마이페이지에서 가능합니다.</Alert>
            </li>
          </ul>
        </BoardWriteForm>
        {Content &&
          Content.map((board, index) => {
            return (
              <React.Fragment key={index}>
                <AddBoard
                  id={board._id}
                  user={board.userFrom}
                  time={board.createdAt}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                  history={`${history}`}
                  onRemove={onRemove}
                />
              </React.Fragment>
            );
          })}
        <PageNumber>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            size="small"
            hidePrevButton
            hideNextButton
          />
        </PageNumber>
      </BoardBox>
    </>
  );
}

export default withSelectedCoinName()(withRouter(BoardView));

const BoardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const Alert = styled.p`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  color: #de506b;
  font-size: 13px;
  padding: 4px 0px;
`;

const BoardWriteForm = styled.form`
  display: flex;
  justify-content: center;
`;

const BoardButton = styled.button`
  border-radius: 8px;
  font-weight: 600;
  width: 100%;
  height: 30px;
  padding-left: 30px;
  letter-spacing: 20px;
  text-align: center;
  background-color: #1a83ff;
  color: #fff;
  &:active {
    opacity: 0.7;
  }
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
