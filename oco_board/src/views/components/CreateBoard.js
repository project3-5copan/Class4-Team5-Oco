import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../../slices/boardSlice';
import { codeActions } from '../../slices/codeSlice';

function CreateBoard({ setShowCreateBoard }) {
    const { codeList, codeStatus, codeStatusText } = useSelector(
        (state) => ({
            codeList: state.codeReducer.codeList,
            codeStatus: state.codeReducer.status,
            codeStatusText: state.codeReducer.statusText
    }));
    const [ board, setBoard ] = useState({});
    const dispatch = useDispatch();

    function onChangeArticle(e) {
        setBoard({
            ...board,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    function onClickSubmitButton() {
        if (board?.name)
        {
            dispatch(boardActions.postBoard({ board, setShowCreateBoard }));
        } else {
            alert("게시판이름은 필수값입니다.");
        }
    }

    useEffect(() => {
        dispatch(codeActions.getCodeList());
    }, [dispatch]);

    return (
        <>
            {
                codeStatus === 200 ? 
                codeList.length > 0 ?
                    <div>
                        <div>
                            <span>게시판 명: </span>
                            <input name="name" onChange={onChangeArticle} />
                        </div>
                        <div>
                            <span>사용 코드: </span>
                            <select name="code" onChange={onChangeArticle} >
                                <option value="">선택</option>
                                {
                                    codeList.map((code) =>(
                                        <option value={code?.value}>{code?.desc ?? ""}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <button onClick={onClickSubmitButton} >등록</button>
                        </div>
                    </div>
                :
                    <div>
                        코드등록이 필요합니다.
                    </div>
                : 
                <div>
                    <div>
                        <span>{codeStatus}</span>
                    </div>
                    <div>
                        <span>{codeStatusText}</span>
                    </div>
                </div>
                
            }
        </>
    );
}

export default CreateBoard;
