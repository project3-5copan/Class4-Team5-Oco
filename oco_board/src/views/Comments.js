import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentActions } from '../slices/commentSlice';

function Comments({ articleId }) {
    const [ newComment, setNewComment ] = useState("");
    const { commentList, status, statusText } = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();

    function onClickInsertCommentButton() {
        dispatch(commentActions.insertComment(newComment));
        setNewComment("");
    }

    function onClickDeleteCommentButton(commentId) {
        if (!window.confirm("삭제하시겠습니까?")) return false;
        dispatch(commentActions.deleteComment(commentId));
    }

    useEffect(() => {
        dispatch(commentActions.getCommentList(articleId));
    }, [dispatch, articleId]);
    return (
        <>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={onClickInsertCommentButton}>등록</button>
            </div>
            <div>
                {
                    status === 200 ?
                    commentList.length > 0 ?
                    commentList.map((comment, index) => (
                        <>
                            <div key={comment?.id ?? index}>
                                <span>{comment?.content ?? ""}</span>
                            </div>
                            <div>
                                <span>{(comment?.insertDate) ? new Date(comment?.insertDate).toLocaleString() : ""}</span>
                            </div>
                            <div>
                                <button onClick={() => onClickDeleteCommentButton(comment?.id ?? 0)}> X </button>
                            </div>
                        </>
                    ))
                    : <div></div>
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
            </div>
        </>
    );
}

export default Comments;
