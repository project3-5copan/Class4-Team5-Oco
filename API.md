# REST API

HTTP 요청 리스트 (axios)

## 회원가입

### POST /user/register

입력
{
"email": "1111@naver.com",
"password": "11111111",
"name": "홍진혁",
"github": "http://github.com",
"gender": "남자",
"field": "프론트엔드",
"userDescription": "안녕"
}
출력
{
"email": "1111@naver.com",
"name": "홍진혁",
"github": "http://github.com",
"gender": "남자",
"field": "프론트엔드",
"userDescription": "안녕",
"date": "2021-10-20T07:02:54.807Z",
"message": "회원가입이 완료되었습니다.",
"success": true
}

## 로그인

### POST /user/login

입력
{
"email": "1111@naver.com",
"password": "11111111"
}
출력
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZmYmYxZTAxMTBlY2YyMGJkMmQwNTciLCJpYXQiOjE2MzQ3MTM0NjV9.hj0X4AgW4KkiOPOumsNQSD1Q9LZlCav3x2DKF3d2_Po",
"\_id": "616fbf1e0110ecf20bd2d057",
"message": "로그인 성공하셨습니다.",
"success": true
}

## 게시글 작성

### POST /post/:uid

{
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null
}
{
"savedPost": {
"userID": "616fbf1e0110ecf20bd2d057",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null,
"\_id": "616fc65534c8b41e80f32e32",
"\_\_v": 0
},
"success": true,
"message": "게시글을 작성하였습니다."
}

## 회원탈퇴

### DELETE /user/:uid/only

{
"deletedCount": 1
}

## 회원탈퇴 + 게시글 삭제

### DELETE /user/:uid/all

{
"deletedCount": 0
}

## 게시글 조회

### GET post/:uid

{
"postsList": [
{
"_id": "616fcc8134c8b41e80f32e3b",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null,
"__v": 0
},
{
"_id": "616fcc8434c8b41e80f32e3d",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null,
"__v": 0
},
{
"_id": "616fcc8434c8b41e80f32e3f",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null,
"__v": 0
}
],
"success": true,
"message": "게시글을 조회했습니다."
}

## 특정 게시글 조회

### GET post/:uid/:postId

{
"\_id": "616fcc8134c8b41e80f32e3b",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null,
"\_\_v": 0
}

## 게시글 수정

### PATCH post/:uid/:postId

{
"title": "안녕하세요, 수정될 게시글입니다.",
"content": "해당 게시글은 수정될겁니다 하하하",
"field": "프론트엔드"
}

{
"updatedPost": {
"acknowledged": true,
"modifiedCount": 1,
"upsertedId": null,
"upsertedCount": 0,
"matchedCount": 1
},
"success": true
}

## 게시글 삭제

### DELETE post/:uid/:postId

{
"deletedCount": 1
}

## 게시글 리스트

### GET post/?page=1&limit=10

## description : list는 postList의 length routes/posts.js 코드 참고

{
"list": 10,  
"postList": [
{
"_id": "616bbfcdc37f206d1fa219f7",
"userID": "616bbf83c37f206d1fa219f5",
"title": "안녕하세용. 노드 개발자입니다.",
"description": "요로시쿠 오네가이시마스!!",
"date": "2021-10-17T06:16:45.191Z",
"__v": 0
},
{
"_id": "616fcc8434c8b41e80f32e3d",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": null,
"__v": 0
},
{
"_id": "616fcc8434c8b41e80f32e3f",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요, 수정될 게시글입니다.",
"content": "해당 게시글은 수정될겁니다 하하하",
"field": "프론트엔드",
"date": null,
"__v": 0
},
{
"_id": "6170469b581dfe4feb4b1979",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:40:59.336Z",
"__v": 0
},
{
"_id": "6170469c581dfe4feb4b197b",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:41:00.224Z",
"__v": 0
},
{
"_id": "6170469c581dfe4feb4b197d",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:41:00.861Z",
"__v": 0
},
{
"_id": "6170469d581dfe4feb4b197f",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:41:01.294Z",
"__v": 0
},
{
"_id": "6170469d581dfe4feb4b1981",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:41:01.673Z",
"__v": 0
},
{
"_id": "6170469e581dfe4feb4b1983",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:41:02.059Z",
"__v": 0
},
{
"_id": "6170469e581dfe4feb4b1985",
"userID": "616fcc0a34c8b41e80f32e38",
"title": "안녕하세요",
"content": "잘부탁드립니당44",
"field": null,
"date": "2021-10-20T16:41:02.438Z",
"__v": 0
}
]
}

## 인증

### GET api/user/auth

{
"isAuth": true,
"userData": {
"\_id": "6171225028901d978833f90c",
"email": "111233221@naver.com",
"name": "홍진혁",
"github": "http://github.com",
"gender": "남자",
"field": "프론트엔드",
"userDescription": "안녕",
"date": "2021-10-21T08:18:24.501Z"
}
}

## 로그아웃

### GET api/user/auth/logout

{
"success": true
}
