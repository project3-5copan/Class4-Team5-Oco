import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddBoard from './Section/Board/AddBoard';
import AddComment from './Section/Comment/AddComment';
import CommentInput from './Section/Comment/CommentInput';
import ReplyInput from './Section/Reply/ReplyInput';
import { uploadComment, getComment } from 'modules/actions/comment';
import { getBoard } from 'modules/actions/board';
import styled from 'styled-components';
import Reply from 'assests/Reply.png';
import List from 'assests/List.png';

function BoardDetail(props) {
  const dispatch = useDispatch();
  const BoardId = props.match.params.boardId;
  const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userName');
  const [Comments, setComments] = useState([]);
  const [BoardDetail, setBoardDetail] = useState([]);
  const [BoardWriter, setBoardWriter] = useState(writerFrom);
  const [commentId, getCommentId] = useState('');
  const [Value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const showHandler = () => setShow(!show);
  const onChange = e => {
    setValue(e.currentTarget.value);
  };
  const [CommentsCounts, setCommentsCounts] = useState('');
  let variables = {
    userFrom: userFrom,
    boardFrom: BoardId,
    commentContent: Value,
    commentWriter: BoardWriter,
  };

  const FetchComment = () => {
    dispatch(getComment(variables)).then(response => {
      if (response.payload.success) {
        setComments(response.payload.comments);
        setCommentsCounts(response.payload.commentCounts);
      } else {
        alert('댓글을 보여줄 수 없습니다.');
      }
    });
  };

  useEffect(() => {
    dispatch(getBoard(BoardId)).then(response => {
      if (response.payload.success) {
        setBoardDetail(response.payload.board);
      } else {
        alert('게시글 가져오기에 실패했습니다.');
      }
    });
  }, []);

  useEffect(() => {
    FetchComment();
  }, [CommentsCounts]);

  const onSubmit = e => {
    e.preventDefault();
    if (!Value) {
      alert('댓글을 작성해주세요.');
      return;
    }

    dispatch(uploadComment(variables)).then(response => {
      alert('댓글이 등록되었습니다.');
      setValue('');
      FetchComment();
      window.location.replace(`${location.pathname}`);
    });
  };

  const onRemoveBoard = id => {
    setBoardDetail(BoardDetail.filter(BoardDetail => BoardDetail._id !== id));
    props.history.push('/board');
  };

  const onRemoveComment = id => {
    setComments(Comments.filter(Comments => Comments._id !== id));
  };

  return (
    <>
      <BoardBox key={props.id}>
        <Link to="/board">
          <ListImg src={List} />
        </Link>
        {BoardDetail &&
          BoardDetail.map((board, index) => {
            return (
              <React.Fragment key={index}>
                <AddBoard
                  id={board._id}
                  user={board.userFrom}
                  time={board.createdAt}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                  history={`${props.history}`}
                  onRemove={onRemoveBoard}
                />
              </React.Fragment>
            );
          })}
        <form onSubmit={onSubmit}>
          <CommentInput
            name="Comment"
            placeholder="댓글을 작성해주세요."
            value={Value}
            onChange={onChange}
          />
          <CommentButton type="submit" onClick={onSubmit}>
            댓글 등록
          </CommentButton>
        </form>
        {Comments &&
          Comments.map((comment, index) => {
            return (
              <CommentUl key={index}>
                <React.Fragment key={index}>
                  <AddComment
                    id={comment._id}
                    boardId={BoardId}
                    user={comment.userFrom}
                    time={comment.createdAt}
                    writer={comment.commentWriter}
                    content={comment.commentContent}
                    onRemove={onRemoveComment}
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
                        boardId={BoardId}
                        name="Reply"
                        placeholder="대댓글을 작성해주세요."
                        userFrom={userFrom}
                        writerFrom={writerFrom}
                      />
                    )}
                  </li>
                </React.Fragment>
              </CommentUl>
            );
          })}
      </BoardBox>
    </>
  );
}

export default withRouter(BoardDetail);

const BoardBox = styled.div`
  width: 800px;
  margin: 0 auto;
  height: 100%;
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

const ListImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: #eee;
  border-radius: 50px;
`;
