const { User } = require('../models/User');

let auth = (req, res, next) => {
  let token = req.cookies.auth_token;

  User.findByToken(token, (err, user) => {
    if(err) throw err
    if(!user) return res.json({ 
      isAuth: false, 
      error: true 
    })
    req.token = token;
    req.user = user;
    next();
  })
}

module.exports = { auth };

/*
let token = req.cookies.auth-token;
let 변수이름 = req.cookies.'쿠키이름'
에러발생 reference Error
*/