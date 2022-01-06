const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  유저아이디
  게시글아이디
  게시글 정보
  (
    제목, 
    내용, 
    작성자
  )
*/

const LikeSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardFrom: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    boardTitle: {
        type: String,
    },
    boardContent: {
        type: String,
    },
    boardWriter: {
        type: String,
    },
},{ timestamps: true });

const Like = mongoose.model('Like', LikeSchema);
module.exports = { Like }