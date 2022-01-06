const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Comment } = require("../models/Comment");
const { Like } = require("../models/Like");

/*
  유저아이디
  제목
  내용
  작성자
*/

const boardSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    boardTitle: {
        type: String
    },
    boardContent: {
        type: String
    },
    boardWriter: {
        type: String
    }
},{ timestamps: true });

// 게시글 삭제하기 전에 댓글, 좋아요 삭제하기
boardSchema.pre('findOneAndDelete', function(next) {
    var Board = this;
    Comment.deleteMany({boardFrom: Board._conditions._id})
        .exec((err, result) => {
            return {success : true, result}
        })
    Like.deleteMany({boardFrom: Board._conditions._id})
        .exec((err, result) => {
            return {success : true, result}
        })
    next();
})

const Board = mongoose.model('Board', boardSchema);
module.exports = { Board }