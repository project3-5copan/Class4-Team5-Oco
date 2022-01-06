const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  유저아이디
  게시판아이디
  댓글내용
  작성자
*/

const commentSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardFrom: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    commentContent: {
        type: String
    },
    commentWriter: {
        type: String
    }
},{ timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = { Comment }

