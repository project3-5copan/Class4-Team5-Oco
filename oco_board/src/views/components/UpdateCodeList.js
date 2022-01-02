import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { codeActions } from '../../slices/codeSlice';

function UpdateCodeList({ setShowUpdateCodeList }) {
    const { codeList, status, statusText } = useSelector((state) => state.codeReducer);
    const [ updatedCodeList, setUpdatedCodeList ] = useState(codeList ?? []);
    const dispatch = useDispatch();

    function onChangeCode(e) {
        const copiedCodeList = [ ...updatedCodeList ];
        copiedCodeList[e.target?.dataset?.index] = { ...copiedCodeList[e.target?.dataset?.index], [e.target?.name]: e.target?.value };
        setUpdatedCodeList(copiedCodeList);
    }

    function onClickSubmitButton(updatedCode) {
        if (!updatedCode?.value || !updatedCode.desc
            || updatedCode?.value === "" || updatedCode.desc === "") {
            alert("빠짐없이 입력해주세요.");
        } else {
            dispatch(codeActions.putCode(updatedCode));
        }
    }

    function onClickDeleteButton(codeId) {
        if (!window.confirm("삭제하시겠습니까?")) return false;
        dispatch(codeActions.deleteCode(codeId));
    }

    useEffect(() => {
        dispatch(codeActions.getCodeList());
    }, [dispatch]);

    useEffect(() => {
        setUpdatedCodeList(codeList);
    }, [codeList]);

    return (
        <div>
            {
                status === 200 ?
                updatedCodeList.length > 0 ?
                    updatedCodeList.map((updatedCode, index) => 
                        <>
                            <div>
                                <span>코드 설명: </span>
                                <input
                                    name="desc"
                                    value={updatedCode?.desc ?? ""}
                                    data-index={index}
                                    onChange={onChangeCode}
                                />
                            </div>
                            <div>
                                <span>게시판 코드값: </span>
                                <input
                                    name="value"
                                    value={updatedCode?.value ?? ""}
                                    data-index={index}
                                    onChange={onChangeCode}
                                />
                            </div>
                            <div>
                                <button onClick={() => onClickSubmitButton(updatedCode)}>저장</button>
                            </div>
                            <div>
                                <button onClick={() => onClickDeleteButton(updatedCode?.id ?? 0)}>삭제</button>
                            </div>
                        </>
                    )
                :
                    <div>
                        수정할 코드가 없습니다.
                    </div>
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
    );
}

export default UpdateCodeList;
