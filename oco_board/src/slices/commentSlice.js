import { createSlice } from "@reduxjs/toolkit";

const name = "comment";

const initialState = {
    commentList: [],
    status: 0,
    statusText: "Loading",
};

const reducers = {
    getCommentList: (state, action) => {},
    getCommentListSuccess: (state, action) => {
        state.commentList = action.payload?.data ?? [];
        state.status = action.payload?.status;
        state.statusText = action.payload?.statusText ?? "Success";
    },
    getCommentListFail: (state, action) => {
        state.commentList = initialState.commentList;
        state.status = action.payload?.status ?? 500;
        state.statusText = action.payload?.statusText ?? "Network Error";
    },

    insertComment: (state, action) => {},
    insertCommentSuccess: (state, action) => {},
    insertCommentFail: (state, action) => {},

    deleteComment: (state, action) => {},
    deleteCommentSuccess: (state, action) => {}, 
    deleteCommentFail: (state, action) => {}, 
};

const commentSlice = createSlice({
    name,
    initialState,
    reducers,
});

export const commentReducer = commentSlice.reducer;
export const commentActions = commentSlice.actions;