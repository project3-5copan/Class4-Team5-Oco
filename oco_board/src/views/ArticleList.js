import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { articleActions } from '../slices/articleSlice';

function ArticleList() {
    const params = useParams();
    const { articleList, status, statusText } = useSelector((state) => state.articleReducer);
    const boardList = useSelector((state) => state.boardReducer.boardList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(articleActions.getArticleList(params?.boardId ?? 0));
    }, [dispatch, params?.boardId]);
    return (
        <>
            {
                status === 200 ?
                    <>
                        <div>
                            <span>게시판: </span>
                            <span>
                                {
                                    boardList.length > 0 &&
                                    boardList.find((board) => board.id === parseInt(params?.boardId))?.name
                                }
                            </span>
                        </div>
                        { articleList.length > 0 ?
                            <div>
                                <div>
                                    {
                                        articleList.map((article, index) => 
                                            <div  key={article?.id ?? index}>
                                                <Link to={{ pathname: `/article/${article?.id ?? 0}` }}>
                                                    <span>{article?.title ?? ""}</span>
                                                </Link>
                                            </div>
                                        )

                                    }
                                </div>
                            </div>
                        :
                            <div> 게시글이 없습니다. </div>
                        }
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

export default ArticleList;
