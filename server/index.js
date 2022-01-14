const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/process.env')});

const app = express();

mongoose.connect(process.env.mongoURI)
.then(() => console.log("몽고 디비와 연결되었습니다."))
.catch((e) => console.log("MongoDB error: ", e))

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const boardRoute = require('./routes/board');
const coinInfoRoute = require('./routes/coininfo');
const commentRoute = require('./routes/comment');
const likeRoute = require('./routes/like');
const replyRoute = require('./routes/reply');

app.use('/api/user', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/board', boardRoute);
app.use('/api/coininfo', coinInfoRoute)
app.use('/api/comment', commentRoute);
app.use('/api/like', likeRoute);
app.use('/api/reply', replyRoute);


const port = 5000;
app.listen(port, () => {
  console.log(`${port}번으로 서버 실행 중입니다.`)
});