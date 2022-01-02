import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Comment from './Comments';
import { articleActions } from '../slices/articleSlice';

function Article() {
    const params = useParams();
    const { article, status, statusText } = useSelector((state) => state.articleReducer);
    const boardList = useSelector((state) => state.boardReducer.boardList);
    const dispatch = useDispatch();
    const history = useHistory();

    function onClickUpdateButton() {
        history.push(`/update/${params?.articleId ?? 0}`);
    }

    function onClickDeleteButton() {
        if (!window.confirm("삭제하시겠습니까?")) return false;
        dispatch(articleActions.deleteArticle());
    }

    useEffect(() => {
        dispatch(articleActions.getArticle(params?.articleId ?? 0));
    }, [dispatch, params?.articleId]);
    return (
        <>
            {
                status === 200 ?
                    <>
                        <div>
                            <button onClick={onClickUpdateButton}>수정</button>
                        </div>
                        <div>
                            <button onClick={onClickDeleteButton}>삭제</button>
                        </div>
                        <div>
                            <span>게시판: </span>
                            <span>
                                {
                                    boardList.length > 0 &&
                                    boardList.find((board) => board.id === parseInt(article?.boardId))?.name
                                }
                            </span>
                        </div>
                        <div>
                            <div><span>제목: </span><span>{article?.title ?? ""}</span></div>
                            <div><span>조회수: </span><span>{article?.views ?? ""}</span></div>
                            <div><span>작성일시: </span><span>{(article?.insertDate) && new Date(article.insertDate).toLocaleString()}</span></div>
                            <div><span>내용: </span><span>{article?.content?.split("\n")?.map(line => <span>{line}<br/></span>)}</span></div>
                        </div>
                        <div>
                            <Comment articleId={params?.articleId ?? 0} />
                        </div>
                    </>
                :
                    <div>
                        <div>
                            <span>{status}</span>
                        </div>
                        <div>
                            <span>{statusText}</span>
                        </div>
                    </div>
            }
        </>
    );
}

export default Article;
