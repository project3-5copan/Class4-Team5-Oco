const express = require('express');
const router = express.Router();
const { Reply } = require('../models/Reply');
//=================================
//              Reply
//=================================

// 대댓글 작성
// POST http://127.0.0.1:5000/api/reply/upload
router.post('/upload', async (req, res) => {
  const reply = await new Reply(req.body);
  reply.save((err, reply) => {
    if(err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  })
})

// 대댓글 조회
// POST http://127.0.0.1:5000/api/reply
router.post('/', (req, res) => {
  Reply.find({ commentFrom: req.body.commentFrom })
    .sort({createdAt: -1})
    .exec( (err, replies) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, replies, replyCounts: replies.length });
    });
})

// 대댓글 삭제
// DELETE http://127.0.0.1:5000/api/reply/{uid}/{replyId}
router.delete('/:uid/:replyId', (req, res) => {
  try {
    Reply.findOneAndDelete({ userFrom: { $eq: req.params.uid }, _id: req.params.replyId })
    .exec((err, result) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, result });
    })
  } catch (err) {
    res.json({ message: err });
  }
})





module.exports = router;