const express = require('express');
const router = express.Router();
const { Board } = require("../models/Board");
const { Comment } = require("../models/Comment");
const { Reply } = require("../models/Reply");
const { Like } = require("../models/Like");
//=================================
//             Board
//=================================

// 게시글 작성
// POST http://127.0.0.1:5000/api/board/upload
router.post('/upload', (req, res) => {
    const board = new Board(req.body);
    board.save((err, board) => {
        if (err) return res.json({
            success: false,
            message: err,
        })
        return res.status(200).json({
            success: true
        })
    })
})

// 게시글 리스트 (pagination)
// POST http://127.0.0.1:5000/api/board/getBoard
router.post('/getBoard', (req, res) => {
    const Page = req.body.page;
    Board.countDocuments({}, (err, count) => {
      if(err) {
        return res.status(400).send(err);
      } else {
        Board.find()
        .sort({createdAt: -1})
        .skip(((Page-1)*10))
        .limit(10)
        .populate("userFrom")
        .exec((err, boards) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, boards, count});
        })
      }
    })
})

// 작성한 게시글 조회 (수정대기)
// GET http://127.0.0.1:5000/api/board/{uid}
router.get('/:uid', async (req, res) => {
  try {                                       
    const board = await Board.find({ userFrom: { $eq: req.params.uid }});
    console.log(board);
    res.json({
      boardList: board,
      success: true,
      message: '게시글을 조회했습니다.'
    });
  } catch (err) {
    res.json({ message: err });
  }
})

// 사용자와 관련된 특정 게시글 조회
// POST http://127.0.0.1:5000/api/board/{uid}/{boardId}
router.post('/:uid/:boardId', async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId);
    if(board.userFrom == req.params.uid) {
      res.json({ success: true, board });
    } else {
      res.json({ success: false, message: "사용자와 일치하지 않습니다." });
    }
  } catch (err) {
    res.json({ message: err });
  }
})

// 게시글 수정 (제목, 내용)
// PATCH http://127.0.0.1:5000/api/board/{uid}/{boardId}
router.patch('/:uid/:boardId', async (req, res) => {
  try {                                                                   
    const updatedBoard = await Board.updateOne({ _id: req.params.boardId, userFrom: { $eq: req.params.uid }}, {
      $set: {
        boardTitle: req.body.boardTitle,
        boardContent: req.body.boardContent,
      }
    });
    res.json({
      updatedBoard: updatedBoard,
      success: true
    })
  } catch (err) {
    res.json({ message: err });
  }
})

// 게시글 삭제
// DELETE http://127.0.0.1:5000/api/board/{uid}/{boardId}
router.delete('/:uid/:boardId', (req, res) => {
  try{ 
    Reply.deleteMany({ userFrom: req.params.uid })
    .exec((err, result) => {
      if (err) return res.status(400).send(err);
      return { success: true, result};
    })
    Comment.deleteMany({ userFrom: req.params.uid })
      .exec((err, result) => {
        if (err) return res.status(400).send(err);
        return { success: true, result};
      })
    Like.deleteMany({ userFrom: req.params.uid })
    .exec((err, result) => {
      if (err) return res.status(400).send(err);
      return { success: true, result};
    })
    Board.findOneAndDelete({ _id: req.params.boardId, userFrom: { $eq: req.params.uid } })
      .exec((err, result) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, result });
    })   
  } catch (err) {
    res.json({ message: err });
  }
})

// 게시글 상세조회
// POST http://127.0.0.1:5000/api/board/{boardId}
router.post('/:boardId', (req, res) => {
  try{
    Board.find({ _id: { $eq: req.params.boardId } })
      .exec((err, board) => {
        if (err)
          return res.status(400).send(err);
        return res.status(200).json({ success: true, board });
      })    
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;