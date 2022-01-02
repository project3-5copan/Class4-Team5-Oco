import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT } from '../utils/events';
import { articleActions } from '../slices/articleSlice';
import { useHistory, useParams } from 'react-router';

function Post() {
    const { boardList, boardStatus, boardStatusText } = useSelector(
        (state) => ({
            boardList: state.boardReducer.boardList,
            boardStatus: state.boardReducer.status,
            boardStatusText: state.boardReducer.statusText
    }));
    const { articleStatus, articleStatusText } = useSelector(
        (state) => ({
            articleStatus: state.articleReducer.status,
            articleStatusText: state.articleReducer.statusText
    }));
    const [ article, setArticle ] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    function onChangeArticle(e) {
        setArticle({
            ...article,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    function onClickSubmitButton() {
        if (article?.boardId > 0 && article?.title)
        {
            if (article?.id > 0)
            {
                dispatch(articleActions.putArticle(article));
            } else {
                dispatch(articleActions.postArticle(article));
            }
        } else {
            alert("게시판과 제목은 필수값입니다.");
        }
    }

    function onClickMoveToControlButton() {
        history.push("/control");
    }

    useEffect(() => {
        if (params?.articleId) {
            dispatch(articleActions.setArticle({ articleId: params?.articleId, setArticle }));
        } else {
            setArticle({});
        }
    }, [dispatch, params?.articleId]);

    
    return (
            <div>
                { boardStatus === 200 && boardList.length > 0 ?
                    (
                        <>
                            <div>
                                <span>게시판: </span>
                                <select
                                    name="boardId"
                                    onChange={onChangeArticle}
                                    value={article?.boardId ?? 0}
                                >
                                    <option value={SELECT.id} key={SELECT.id}>{SELECT.name}</option>
                                    { 
                                        boardList.map((board, index) => (
                                            <option value={board?.id} key={board?.id}>{board?.name ?? ""}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <span>제목: </span>
                                <input
                                    name="title"
                                    onChange={onChangeArticle}
                                    value={article?.title ?? ""}
                                />
                            </div>
                            <div>
                                <span>내용: </span>
                                <textarea
                                    name="content"
                                    onChange={onChangeArticle}
                                    value={article?.content ?? ""}
                                />
                            </div>
                            <button onClick={onClickSubmitButton}>등록</button>
                        </>
                    ) : boardStatus === 200 && boardList.length === 0 ?
                    (
                        <div>
                            <div>
                                게시판 등록이 필요합니다.
                            </div>
                            <div>
                                <button onClick={onClickMoveToControlButton}>설정 이동</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <span>{boardStatus}</span>
                            </div>
                            <div>
                                <span>{boardStatusText}</span>
                            </div>
                        </div>
                    )
                }
                { articleStatus !== 200 && articleStatus !== 0 && (
                    <div>
                        <div>
                            <span>{articleStatus}</span>
                        </div>
                        <div>
                            <span>{articleStatusText}</span>
                        </div>
                    </div>
                )}
            </div>
    );
}

export default Post;
