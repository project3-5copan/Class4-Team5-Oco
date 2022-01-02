import { createSlice } from "@reduxjs/toolkit";

const name = "Code";

const initialState = {
    codeList: [],
    status: 0,
    statusText: "Loading"
};

const reducers = {
    getCodeList: (state, action) => {},
    getCodeListSuccess: (state, action) => {
        state.codeList = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    getCodeListFail: (state, action) => {
        state.codeList = initialState.codeList
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    getCode: (state, action) => {},
    getCodeSuccess: (state, action) => {},
    getCodeFail: (state, action) => {},

    postCode: (state, action) => {},
    postCodeSuccess: (state, action) => {},
    postCodeFail: (state, action) => {},

    putCode: (state, action) => {},
    putCodeSuccess: (state, action) => {},
    putCodeFail: (state, action) => {},

    deleteCode: (state, action) => {},
    deleteCodeSuccess: (state, action) => {},
    deleteCodeFail: (state, action) => {},
};

const codeSlice = createSlice({
    name,
    initialState,
    reducers
});

export const codeReducer = codeSlice.reducer;
export const codeActions = codeSlice.actions;