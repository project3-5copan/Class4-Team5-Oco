const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { User } = require('../models/User');
const { Board } = require("../models/Board");
const { Comment } = require("../models/Comment");
const { Like } = require("../models/Like");
const { Reply } = require("../models/Reply");
const saltRounds = 10;
const bcrypt = require('bcrypt');
//=================================
//             User
//=================================

// 회원가입
// POST http://127.0.0.1:5000/api/user/register
router.post('/register', async (req, res) => {
  // 이메일 중복확인
  const emailExist = await User.findOne({ email: req.body.email });
  if(emailExist) return res.status(400)
    .send('이미 존재하는 이메일입니다.')
    .json({
      overlap: true,
      message: "이미 존재하는 이메일입니다."
    });
  const user = new User(req.body);
  try{
    await user.save();
    res.json({
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
      name: user.name,
      github: user.github,
      gender: user.gender,
      field: user.field,
      userDescription: user.userDescription,
      date: user.date,
      token: user.token,
      message: '회원가입이 완료되었습니다.',
      success: true
    })
  } catch (err) {
    res.status(400)
      .json({ message: '회원가입에 실패하였습니다.', success: false })
  }       
});

// 로그인
// POST http://127.0.0.1:5000/api/user/login
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        success: false, 
        message: "해당 이메일에 가입된 사용자가 없습니다."
      });
    }
    // 비밀번호 비교 (몽고스키마 인스턴스 메소드)
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch)
      return res.json({ success: false, message: "비밀번호가 틀렸습니다." });
    // 토큰 생성 (몽고스키마 인스턴스 메소드)
      user.generateToken((err, user) => {
          if(err) return res.status(400).send(err);
          res.cookie("auth_token", user.token).status(200)
          .json({
            _id: user._id,
            name: user.name,
            success: true
          });
      })
    })
  });
});

// 로그아웃
// http://127.0.0.1:5000/api/user/logout
router.get('/logout', auth, (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.user._id}, 
    {token: ''}, 
    (err, user) => {
    if(err) return res.json({ success: false, err });
    return res.status(200).send({ success: true, isAuth: false });
  })
})

// 회원리스트 조회
// GET http://127.0.0.1:5000/api/user
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const userList = await User.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(200).json({ list: userList.length, userList });
  }catch (err) {
    console.log(err);
    res.status(500).json({ message: err })
  }
})

// 회원 조회
// GET http://127.0.0.1:5000/api/user/{uid}
router.get('/:uid', async (req, res) => {
  try {
    const userInfo = await User.findById(req.params.uid);
    res.json({
      userInfo: userInfo,
      success: true,
      message: "사용자 정보를 조회했습니다."
    });
  } catch (err) {
    res.json({ message: err });
  }
})

// 이메일 중복확인
// POST http://127.0.0.1:5000/api/user/checkEmail
router.post('/checkEmail', (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {
    if(user) return res.json({
      success: false,
      message: '이미 가입된 이메일입니다.'
    });
    else {
      res.json({ 
        success: true, 
        message: '사용 가능한 이메일입니다.',
        email: req.body.email
      });
    }
  })
})

// 회원탈퇴
// POST http://127.0.0.1:5000/api/user/withdrawal
router.post('/withdrawal', auth, (req, res) => {
  User.findOne({ _id: req.body._id }, (err, user) => {
    if(err) return res.status(400).send(err);
    user.comparePassword(req.body.password , (err, isMatch ) => {
        if (!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다." })
        else {
          Reply.deleteMany({ userFrom: user._id })
            .exec((err, result) => {
              return { success: true, result }
            })
          Comment.deleteMany({ userFrom: user._id })
            .exec((err, result) => {
              return { success : true, result }
          })
          Like.deleteMany({ userFrom: user._id })
              .exec((err, result) => {
              return { success : true, result }
          })
          Board.deleteMany({ userFrom: user._id })
            .exec((err, result) => {
              return { success : true, result }
          })
          User.deleteOne({ _id: req.body._id }, (err, user) => {
              if(err) return res.status(404).send();
              else return res.json({ changeSuccess: true });
          });
        } 
    })
  })
})


// 이메일 가져오기 / 깃헙주소 가져오기
// POST http://127.0.0.1:5000/api/user/
router.post('/myEmail', auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if(user) return res.status(200).json({        
        email: req.user.email
    })
    else return res.status(404).send();
  })
})

// 깃헙주소 가져오기
// POST http://127.0.0.1:5000/api/user/
router.post('/myGithub', auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if(user) return res.status(200).json({
      github: req.user.github
    })
    else return res.status(404).send();
  })
})


// 이메일 변경
// POST http://127.0.0.1:5000/api/user/update/email
router.post('/update/email', auth, (req, res) => {
  User.findOne({ _id: req.body._id }, (err, user) => {
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다."})
      else User.findOneAndUpdate(
        { _id: req.body._id },
        { $set: { email: req.body.email }},
        { new: true },
        (err, user) => {
          console.log(err);
          if(!user) return res.json({ message: '이미 존재하는 이메일입니다.'});
          else return res.json({ changeSuccess: true });
        }
      )
    })
  })
})

// 비밀번호 변경
// POST http://127.0.0.1:5000/api/user/update/password
router.post('/update/password', auth, (req, res) => {
  User.findOne({ _id: req.body._id }, (err, user) => {
    if(req.body.currentPassword === req.body.newPassword) {
      return res.json({ message: "현재 비밀번호와 새 비밀번호가 동일합니다."})
    }
    user.comparePassword(req.body.currentPassword, (err, isMatch) => {
      if(!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다." })
      else bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return res.status(400).send(err)
        bcrypt.hash(req.body.newPassword, salt, function(err, hash) {
          if(err) return res.status(400).send(err);
          User.findOneAndUpdate({ _id: req.body._id }, { password: hash })
          .then(() => res.status(200).json({ changeSuccess: true }))
          .catch(err => res.status(500).json(err))
        })
      })
    })
  })
})

// 깃헙 주소 변경
// POST http://127.0.0.1:5000/api/user/update/github
router.post('/update/github', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { github: req.body.newGithub }},
    { new: true },
    (err, github) => {
      console.log(err);
      if(!github) return res.status(400).json({ message: '이미 존재하는 깃헙주소입니다.'});
      else return res.json({ changeSuccess: true });
    }
  )
})

// 내가 쓴 글 조회하기 
// POST http://127.0.0.1:5000/api/user/myBoard
router.post('/myBoard', (req, res) => {
  Board.find({ userFrom: req.body.userFrom })
    .sort({ createdAt: -1 })
    .exec((err, boards) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, boards })
    })
})

// 내가 쓴 댓글 조회하기
// POST http://127.0.0.1:5000/api/user/myComment
router.post('/myComment', (req, res) => {
  Comment.find({ userFrom: req.body.userFrom })
  .populate("boardFrom")
  .sort({ createdAt: -1 })
  .exec((err, comments) => {
    if(err) return res.status(400).send(err);
    return res.status(200).json({ success: true, comments })
  })
})

// 내가 쓴 대댓글 조회하기
// POST http://127.0.0.1:5000/api/user/myReply
router.post('/myReply', (req, res) => {
  Reply.find({ userFrom: req.body.userFrom })
  .populate("commentFrom")
  .sort({ createdAt: -1 })
  .exec((err, replies) => {
    if(err) return res.status(400).send(err);
    return res.status(200).json({ success: true, replies })
  })
})

module.exports = router;