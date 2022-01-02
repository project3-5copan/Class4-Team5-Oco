import { createSlice } from "@reduxjs/toolkit";

const name = "board";

const initialState = {
    boardList: [],
    status: 0,
    statusText: "Loading"
};

const reducers = {
    getBoardList: (state, action) => {},
    getBoardListSuccess: (state, action) => {
        state.boardList = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    getBoardListFail: (state, action) => {
        state.boardList = initialState.boardList
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    getBoard: (state, action) => {},
    getBoardSuccess: (state, action) => {},
    getBoardFail: (state, action) => {},

    postBoard: (state, action) => {},
    postBoardSuccess: (state, action) => {},
    postBoardFail: (state, action) => {},

    putBoard: (state, action) => {},
    putBoardSuccess: (state, action) => {},
    putBoardFail: (state, action) => {},

    deleteBoard: (state, action) => {},
    deleteBoardSuccess: (state, action) => {},
    deleteBoardFail: (state, action) => {},
};

const boardSlice = createSlice({
    name,
    initialState,
    reducers
});

export const boardReducer = boardSlice.reducer;
export const boardActions = boardSlice.actions;