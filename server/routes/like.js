const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
//=================================
//              Like
//=================================

// 좋아요 개수 조회
// POST http://127.0.0.1:5000/api/like/likeCounts
router.post('/likeCounts', (req, res) => {
    Like.find({ boardFrom: req.body.boardFrom })
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, likes, likeCounts: likes.length });
        })
})

// 좋아요 확인 (true or false)
// POST http://127.0.0.1:5000/api/like/liked
router.post("/liked", (req, res) => {
    Like.find({ userFrom : req.body.userFrom , boardFrom : req.body.boardFrom})
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            let result = false;
            if(likes.length !== 0) {
                result = true;
            }
            return res.status(200).json({ success: true, liked: result });
        }) 
})

// 좋아요 클릭
// POST http://127.0.0.1:5000/api/like
router.post('/', (req, res) => {
    const like = new Like(req.body);
    like.save((err, likes) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
    })
})

// 좋아요 삭제
// POST http://127.0.0.1:5000/api/like/dislike
router.post('/dislike', (req, res) => {
    Like.findOneAndDelete({ userFrom: req.body.userFrom, boardFrom: req.body.boardFrom})
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, likes })
        })
})

// 좋아요 누른 게시글 목록
// POST http://127.0.0.1:5000/api/like/likes
router.post('/likes', (req, res) => {
    Like.find({userFrom: req.body.userFrom})
        .sort({createdAt: -1})
        .exec((err, likes) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, likes })
        })
})

module.exports = router;