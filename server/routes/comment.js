const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const { Reply } = require('../models/Reply');
//=================================
//            Comment
//=================================

// 댓글조회
// POST http://127.0.0.1:5000/api/comment/
router.post('/', (req, res) => {
    Comment.find({ boardFrom: req.body.boardFrom })
        .sort({createdAt: -1})
        .exec((err, comments) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, comments, commentCounts: comments.length });
        });       
})

// 댓글작성
// POST http://127.0.0.1:5000/api/comment/upload
router.post('/upload', (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, comments) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
    });
})

// 댓글수정
// PATCH http://127.0.0.1:5000/api/comment/{uid}/{commentId}
router.patch('/:uid/:commentId', async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne({ _id: req.params.commentId, userFrom: { $eq: req.params.uid }}, {
            $set: {
                commentContent: req.body.commentContent
            }
        });
        res.json({
            updatedComment: updatedComment,
            success: true
        })
    }catch (err) {
        res.json({ message: err });
    }
})

// 댓글삭제
// DELETE http://127.0.0.1:5000/api/comment/{uid}/{commentId}
router.delete('/:uid/:commentId', (req, res) => {
    try{
        Reply.deleteMany({ userFrom: req.params.uid })
        .exec((err, result) => {
            if (err) return res.status(400).send(err);
            return { success: true, result};
        });
        Comment.findOneAndDelete({ userFrom: { $eq : req.params.uid }, _id: req.params.commentId })
        .exec((err, result) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, result})
        });        
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;










