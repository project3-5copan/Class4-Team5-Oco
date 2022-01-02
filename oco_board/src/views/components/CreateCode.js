import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { codeActions } from '../../slices/codeSlice';

function CreateCode({ setShowCreateCode }) {
    const [ code, setCode ] = useState({});
    const dispatch = useDispatch();

    function onChangeCode(e) {
        setCode({
            ...code,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    function onClickSubmitButton() {
        if (code.value !== "" && code.desc !== "")
        {
            dispatch(codeActions.postCode({ code, setShowCreateCode }));
        } else {
            alert("빠짐없이 입력해주세요.");
        }
    }

    return (
        <div>
            <div>
                <span>코드 설명: </span>
                <input name="desc" onChange={onChangeCode} value={code?.desc ?? ""} />
            </div>
            <div>
                <span>코드 설정값: </span>
                <input name="value" onChange={onChangeCode} value={code?.value ?? ""} />
            </div>
            <div>
                <button onClick={onClickSubmitButton}>등록</button>
            </div>
        </div>
    );
}

export default CreateCode;
