## 프로젝트 기간
- 10/7 ~ 10/10: 프로젝트 구상하기 
- 10/11 ~ 10/20 : 단일 기능 구현해보기(파일 업로드, 회원가입, 로그인), 관련 예제 코드 수집하기
- 10/20 ~ 11/3 : 프로젝트 진행
- 11/4 : 프로젝트 종료


## 프로젝트 설명
MERN 스택(MongoDB, Express.js, React.js, Node.js)를 활용하여 CRUD 기능을 구현하고 REST API를 직접 다뤄봄으로써 프론트엔드와 백엔드에서 필요한 능력을 고루 배양하며 개발하면서 필요하다고 생각되는 개념들을 일차별로 정리하였습니다.


## 실행방법
1. 환경변수 설정하기 (cd server) > process.env 파일 생성
```javascript
mongoURI = "몽고 아틀라스 주소 입력"
TOKEN_SECRET = adsdasdasda
```
2. cd server > yarn install (모듈 설치)
3. cd client > yarn install (모듈 설치)
4. cd server > yarn run dev (클라이언트, 서버 동시 실행)


## Preview
![0](https://user-images.githubusercontent.com/77400522/140246301-d4e29c73-f105-421e-901d-3770db0ae2c5.gif)
![1](https://user-images.githubusercontent.com/77400522/140246330-91d0ef18-ba84-4b35-8737-91a0f3de3d85.gif)
![2](https://user-images.githubusercontent.com/77400522/140246373-e7cc70f0-cdf9-4161-8b53-226e4952da60.gif)
![3](https://user-images.githubusercontent.com/77400522/140246369-01eb1911-8c32-4cb6-8b28-e26e7331d8e1.gif)
![4](https://user-images.githubusercontent.com/77400522/140246364-19d05579-93f9-42ea-bc48-49318a975d34.gif)
![5](https://user-images.githubusercontent.com/77400522/140246361-aa2ebaf4-8080-49e6-8bc0-81eaa5d23f56.gif)
![6](https://user-images.githubusercontent.com/77400522/140246356-a203159a-135c-4be6-8903-d1c16c5d29f0.gif)
![7](https://user-images.githubusercontent.com/77400522/140246354-8a7a3f34-ca7e-4dde-ad16-3eb8f8b78dc9.gif)
![8](https://user-images.githubusercontent.com/77400522/140246353-40c8dde8-abde-40ad-8472-cb265502127b.gif)
![9](https://user-images.githubusercontent.com/77400522/140246350-4d78f06f-05d5-489e-bccc-171ccf3c83df.gif)
![10](https://user-images.githubusercontent.com/77400522/140246348-ebfd03b7-96ed-44be-964a-e5b9146ef708.gif)


# 🛠 기능
### 로그인
1. JWT 인증방식을 이용하여 로그인
2. 로그인 시 이메일 중복확인
3. 로그인시 헤더에 이용자 이름 출력

### 회원가입
1. useForm 라이브러리 사용
2. watch를 이용하여 비밀번호, 비밀번호 확인 실시간 비교
3. 회원가입 클릭시 이메일 중복체크
4. 아이디(이메일 형식) 및 비밀번호(영문 대소문자, 숫자, 특수문자 포함) 정규식 적용 
5. 필수 정보 입력(이메일, 비밀번호, 이름, 깃헙주소, 자기소개) 후 회원가입 승인

### 게시판
1. @material-ui/lab/Pagination 라이브러리를 활용하여 페이지네이션 구현
2. 실명 게시판 글 작성 및 수정, 삭제 기능 구현
3. 댓글 작성 및 수정, 삭제 기능 구현, 대댓글 작성 기능 구현
4. 게시글 좋아요 기능 구현
5. 게시글 작성자가 자신의 게시글에 댓글을 달 경우 색깔 표시 및 이름 옆 (작성자) 표시
6. 게시글 작성시간 표시 내림차순(createdAt: -1) 정렬


### 마이페이지
1. 계정 정보 변경하기 (이메일, 비밀번호, 깃헙 주소)
2. 내가 쓴 게시글, 내가 쓴 댓글, 내가 좋아요 누른 게시글, 내가 대댓글 단 댓글 확인 및 수정
3. 회원탈퇴시 작성한 게시글, 댓글, 대댓글 및 좋아요 데이터 삭제 

# ⚙️ 라이브러리
## FrontEnd
- Redux
- React-Router
- Styled-components
- useForm(react-hook-form)
- Axios
- @material-ui
- @loadable/component
- redux-thunk, redux-promise

## BackEnd
- dotenv 환경변수 설정
- Mongoose (MongoDB)
- Bcrypt (암호화)
- JWT (인증방식)
- Express.js



## 📄 10/21 (목)
## 쿠키와 세션을 사용하는 이유
- HTTP 프로토콜의 특징이자 약점을 보완하기 위해서 사용.

## HTTP 프로토콜 특징
- 비연결지향(Connectionless)
1. HTTP는 클라이언트가 요청(request)을 서버에 보내고, 서버는 클라언트에게 적절한 응답(response)을 주고 연결을 끊는 특성이 있다.
2. HTTP1.1 버전에서는 커넥션을 계속 유지하고 요청(request)에 재활용하는 기능이 추가되었다.(HTTP Header)에 keep-alive 옵션을 주어 커넥션을 재활용하게 한다. 
> HTTP1.1 버전에서는 디폴트(default)옵션이다.
- 상태없음(Stateless)
4. 커넥션을 끊는 순간 클라이언트와 서버의 통신이 끝나며 상태 정보는 유지하지 않는 특성이 있다.

- HTTP는 이 두가지 특성을 보완하기 위해서 쿠키와 세션을 사용하게 되었다.
- 비연결지향이라는 특성 덕분에 계속해서 커넥션을 유지하지 않기 때문에 서버 리소스 낭비가 줄어드는 것은 아주 큰 장점이지만, 통신할 때마다 새로 커넥션을 만들기 때문에 클라이언트 측면에서는 상태를 유지를 위해 통신할 때마다 어떤 절차를 가져야 하는 단점이 생긴다.


## 쿠키(Cookie)
- 쿠키는 클라이언트 로컬(local)에 저장되는 키와 값(key, value)이 들어있는 작은 데이터 파일이다.
- 쿠키는 서버에서 HTTP Response Header에 Set-Cookie 속성을 이용하여 클라이언트에 쿠키를 제공한다. 
- 쿠키에는 이름, 값, 만료 날짜/시간(쿠키 저장기간), 경로 정보등이 들어있다.
- 쿠키는 클라이언트의 상태 정보를 로컬에 저장했다가 요청(Request)할 때 참조된다.
- 쿠키는 서버측에서 만료 날짜/시간을 지정하여 정해진 시간동안 데이터(상태정보)를 유지할 수 있다. (로그인 상태 유지에 활용된다.)

## 세션쿠키(Session Cookie)와 지속 쿠키(Persistent Cookie)

- 쿠키는 세션 쿠키(Session Cookie)와 지속 쿠키(Persistent Cookie)로 나뉜다. 만료 날짜/시간을 지정하지 않으면, '메모리에 있는 동안' 계속 유효하다고 판단하도록 세션 쿠키에 저장되고, 만료 날짜/시간을 지정
하면 프로세스가 종료되더라도(메모리에서 사라지더라도) 특정 만료날짜/시간까지 유효하므로 지속 쿠키에 저장된다.
- 세션 쿠키는 브라우저 메모리에 저장되므로 브라우저가 종료되어도 쿠키는 남아있게 된다.
- 지속 쿠키는 파일로 저장되므로 브라우저가 종료되어도 쿠키는 남아있게 된다.

> 참고로 세션 쿠키의 값은 보안상 꽤나 안전한 브라우저(크롬...etc)의 메모리에 저장되기 때문에 보안에 유리하지만 파일로 저장되는 지속 쿠키의 경우 비교적으로 보안에 취약하다.

### 쿠키 프로세스
1. 브라우저에서 웹페이지에 접속한다.
2. 클라이언트가 요청한 웹페이지를 응답으로 받으면서 HTTP 헤더를 통해 해당 서버에서 제공하는 쿠키 값을 응답으로 준다. 
3. 클라이언트가 웹페이지를 요청한 서버에 재 요청시 받았던 쿠키 정보도 같이 HTTP 헤더에 담아서 요청한다.
4. 서버는 클라이언트의 요청(Request)에서 쿠키 값을 참고하여 비즈니스 로직을 수행한다.

### 쿠키 사용사례
> 자동 로그인, 팝업 "오늘 더 이상 이 창을 보지 않음", 장바구니 ...

### 쿠키의 한계
- 클라이언트에 최대 300개까지 쿠키를 저장할 수 있다.
- 서버 도메인 하나당 최대 20개의 쿠키를 저장할 수 있다.
- 하나의 쿠키 값은 최대 4KB까지 저장할 수 있다.

> 쿠키는 사용자가 별도로 요청하지 않아도 브라우저(Client)에서 서버에 요청(Request)시에 Request Header에 쿠키 값을 넣어 요청한다. 그렇다고 그 많은 쿠키 값을 굳이 모든 요청에 넣어 비효율적으로 동작시키지 않는다. 도메인 설정을 통해 지정한 도메인으로 요청할 때만 쿠키값이 제공되도록 할 수 있다.

## 세션(Session)
- 서버(Server)에 클라이언트의 상태 정보를 저장하는 기술로 논리적인 연결을 세션이라고 한다.
- 웹 서버에 클라이언트에 대한 정보를 저장하고 클라이언트에게는 클라이언트를 구분할 수 있는 ID를 부여하는데 이것을 세션아이디라고 한다.

### 세션 프로세스
1. 클라이언트가 서버에 요청했을 때, 필요에 따라 세션에 클라이언트에 대한 데이터를 저장하고 세션아이디 응답을 통해 발급해준다. 
2. 클라이언트는 발급받은 세션아이디를 쿠키로 저장한다.
3. 클라이언트는 다시 서버에 요청할 때, 세션 아이디를 서버에 전달하여 상태 정보를 서버가 활용할 수 있도록 해준다. 
> 결과적으로 세션을 통해 클라이언트의 정보는 서버에 두고, 세션아이디를 이용해서 인증받고 정보를 이용하는 방식이다.

## 세션 사용 사례
> 로그인 정보 유지

# 쿠키와 세션의 차이
## 저장 위치
- 쿠키는 클라이언트(브라우저) 메모리 또는 파일에 저장하고, 세션은 서버 메모리에 저장된다.
- 세션 쿠키는 브라우저 메모리, 지속 쿠키는 파일에 저장된다.

## 보안
- 쿠키는 클라이언트 로컬(local)에 저장되기도 하고 특히 파일로 저장되는 경우 탈취, 변조될 위험이 있고 Request/Response에서 스니핑을 당할 위험이 있어 보안이 비교적 취약하다. 반대로 세션은 클라이언트 정보 자체는 서버에 저장되어 있으므로 비교적 안전하다.

## 라이프 사이클
- 쿠키는 앞서 설명한 지속 쿠키의 경우에 브라우저를 종료하더라도 저장되어 있을 수 있는 반면에 세션은 서버에서 만료시간/날짜를 정해서<br>
지워버릴 수 있기도 하고 세션 쿠키에 세션 아이디를 정한 경우, 브라우저 종료시 세션아이디가 날아갈 수 있다.

## 속도
- 쿠키에 정보가 있기 때문에 서버에 요청시 헤더를 바로 참조하면 되므로 속도에서 유리하지만. 세션은 제공받은 세션아이디를 이용해서 서버에 다시 데이터를 참조해야 하므로 속도가 비교적 느릴 수 있다.
⚙️ 진행상황 : 회원가입, 로그인, 게시글 작성 REST API 작성, 테스트 완료 

## 📄 10/22 (금)

보다 편리하게 유효성 검사를 진행하기 위해서 리액트 훅을 알아보던 중 useForm을 발견했다 !! <br>
## React Hook Form https://react-hook-form.com/

> React Hook Form은 React에서 Form을 쉽게 만들기 위한 라이브러리로 성능이 좋고 유연하며 유효성 검사에 탁월하다.

## 장점 
- 적은 코드로 더 좋은 퍼포먼스를 낼 수 있다.
- 다른 라이브러리 혹은 React에 비해 Re-render수가 적다.
- Fast Mounting (로딩속도가 빠름)
- TS를 기본으로 지원

## register 
> register은 input에서 값을 불러오기 위한 함수로 다른 옵션을 이용하면 input의 유효성 검사도 쉽게 할 수 있다.

먼저 register은 사용하기 위해서는 input에 다음과 같이 {...register("사용하고 싶은 이름")} 이라고 적어주면 나중에 적은 이름으로 값을 불러올 수 있다. input에서 입력하는 값을 실시간으로 확인하기 위해서는 watch라는 함수를 사용할 수도 있다. watch함수는 비밀번호 입력란에 있는 값과 비밀번호 확인란에 입력하는 값을 비교할 때 사용한다.

## handleSubmit
> handleSubmit은 React Hook Form에서 Submit을 관리하기 위해 만든 함수이다.

handleSubmit은 함수를 인자로 받으며 그 함수에 data라는 인자를 넘겨준다. 이렇게 넘겨받은 데이터를 출력하면 watch 함수가 가장 마지막으로 출력하는 데이터를 볼 수 있다. 

## onError
- handleSubmit은 두가지 인자를 받는데 하나는 onSubmit으로 정상적으로 Submit 되었을 때 실행하는 함수이고 
- 두번째 인자는 onError로 Form에서 에러가 났을때 실행되는 함수입니다.
> 여기서 에러는 Validation을 통과하지 못했다는 것을 의미합니다.

## mode: "onChange"
- 실시간으로 유효성 검사를 하게 하며 input에 validation을 설정한 다음에 useForm에서 errors라는 객체를 가져온다.
> errors는 에러들이 담긴 객체로 모드가 onChange/onTouched 일 경우 에러가 실시간으로 업데이트 된다.

## mode 공식문서 참고
<img src="https://user-images.githubusercontent.com/77400522/140259650-e9e7613c-a2b2-423d-88f3-c680f7212954.png" width="100%" height="100%" />

## + 폼 양식을 작성할 때는 공식문서에 있는 빌더를 이용하면 편리하다. 👍🏻👍🏻👍🏻 
<img src="https://user-images.githubusercontent.com/77400522/138428898-1f227695-2d62-4fb7-a0de-8cd0da2345df.png" width="100%" height="100%" />

⚙️ 진행상황 : 프론트엔드 로그인, 회원가입, 인증 구현 완료, 유효성 검사(진행)

## 📄 10/23 (토)

클라이언트에서 보내는 데이터의 변수명과 디비에서 작성한 데이터의 변수명이 동일한지 확인하고 해당 로직에 관여하는 모든 코드를 살펴보았다... 이름이 다른 변수들을 수정하고 클라이언트에서 요청하는 데이터가 서버에서 주는 데이터보다 더 많은 데이터를 요구하고 있었고 클라이언트에서 필요한 데이터이므로 데이터를 추가하고 유효성 검사를 기존에는 서버에서 joi 라이브러리를 활용할 계획이었으나 useForm이라는 훅을 알게되어 이것이 더 사용하기 편리하겠다고 생각하고 사용하게 되었는데 서버에서 작성해둔 joi 유효성 검사조건과 클라이언트에서 작성한 유효성 조건이 일치하지 않았고 이 또한 에러의 원인이 되었다.다른 에러보다 Bad request 400에러가 처리하기 힘들다...가장 만나기 싫은 에러가 되었다. <br>

- 회원가입 -> DB데이터 저장 확인 -> 토큰 미부여 -> 로그인 -> DB 토큰 생성 확인 -> 로그아웃 -> 토큰값 '' 확인


⚙️ 진행상황 : 로그인, 회원가입 bad request 400 error 해결 (프론트엔트 유효성 검사, 백엔드 joi 유효성 검사 충돌), 드롭다운 구성(게시판, 채팅, 문의하기), 헤더 css...


## 📄 10/24 (일)

- 에러 : 로그인 로직 수행 중 비밀번호가 틀렸을 경우 "비밀번호가 틀렸습니다" 에러가 표시되어야 하는 상황에서 에러가 표시되지 않는 문제
- 특이점 : 데이터베이스에 가입된 이메일로 틀린 비밀번호를 입력하여 로그인을 실행할 경우 "비밀번호가 틀렸습니다" 정상 실행, 하지만 데이터베이스에 없는 이메일로 로그인을 시도할 경우 bad request 400 발생.
- 해결 : 로그인 라우터 수정 (이메일이 존재할 경우 status(400)을 전송하였는데 이것이 원인) 

## 수정 전 
```javascript
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // 이메일 존재여부확인 
    if(!user) {
      return res.status(400).json({
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
            success: true
          });
      })
    })
  });
});

```

## 수정 후 코드
```javascript
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // 이메일 존재여부확인 
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
            success: true
          });
      })
    })
  });
});

```


## 📄 10/25 (월)

- 에러: 로그인을 하고 나면 토큰에 내가 저장한 사용자 정보 중 사용자 이름을 가져와서 상단바에 입력하고자 하여 useEffect를 사용하여 마운트 시에 한 번만 렌더링시켰으나 로그인 후 새로고침이 되지 않아 이름 정보가 화면에 출력되지 않는 상황, 새로고침을 해야 상단바에 이름이 출력
- 해결: 로그인 직후에 props.history.push('/')를 이용하여 페이지를 이동시켰으나 새로고침은 되지 않아 window.location.replace('/')를 사용하여 페이지 이동 후 새로고침 진행하자 화면에 이름이 출력되었다.

키워드: 페이지간 데이터 이동(쿠키), useEffect(), 리액트 생명주기

## history.push vs window.location.href 비교

### 공통점
- 다른 페이지로 이동

### 차이점
- HTTP 요청<br>
history.push X | window.location.href O<br>
- 새로고침<br>
history.push X | window.location.href O<br>
- Application 상태 유지<br>
history.push O | window.location.href X<br>


> 좋은 UX와 상태 지속성을 위한다면 일반적인 페이지 이동은 history.push가 더 나은 선택일 수도... <br>
> 이동과 함께 새로고침이 필요한 경우는 window.location.href를 사용. 하지만 이상하게도 window.loaction.replace만 원하는대로 작동한다.

## push와 replace의 차이점 ??
- Home > Item > Login > Item 순으로 페이지를 이동했을 때 Login 페이지에서 history.push / history.replace 사용시 차이점

1. history.push
> Home > Item > Login > Item 순으로 history에 쌓여서 마지막 페이지에서 뒤로가기 버튼을 누르면 Login 페이지로 되돌아간다.

2. history.replace
> Home > Item > Item 순으로 history에 쌓여서 마지막 페이지에서 뒤로가기 버튼을 누르면 Item 페이지로 되돌아간다.

### history를 스택이라고 가정한다면 push는 history 최상단에 쌓는 것, replace는 history 제일 위에 있는 원소를 지금 넣을 원소로 바꾸는 것(대체하는 것).

## useEffect()
```swift
useEffect(() => {
  ...
}, [deps])
```
1. 페이지가 처음 렌더링 되고 난 후 useEffect는 무조건 한 번 실행됩니다. 
2. useEffect에 배열로 지정한 useState의 값이 변경되면 실행되게 됩니다. [...] 

> 즉, useEffect는 렌더링, 혹은 변수의 값 혹은 오브젝트가 달라지게 되면 그것을 인지하고 업데이트를 해주는 함수이다. useEffect는 콜백 함수를 부르게 되며, 렌더링 혹은 값, 오브젝트의 변경에 따라 어떠한 함수 혹은 여러 개의 함수들을 동작시킬 수 있습니다.

## 📄 10/26 (화)
오늘은 현재까지 프로젝트를 진행하면서 사용했던 라이브러리들 중 개념이 익숙치 않거나 모호한 것들에 대해서 다시 한번 정리해보려고 한다. <br>

## Provider 
- 리액트로 컴포넌트를 만들 때, 상태 값 관리는 보통 props 또는 state로 관리한다. 리액트에는 사실 props와 state외에도 상태를 관리하는 속성이 있다. 상태 관리(state management) 라이브러리로 react-redux, mobx-react 또는 react-apollo 등이 있으며 현재 진행중인 프로젝트에서는 react-redux로 상태관리를 하고 있다. 또한 styled-components나 material-ui 등의 ui라이브러리에서도 이 context를 사용하고 있다. 보통 이러한 라이브러리를 이용하면 Provider라는 이름의 컴포넌트를 제공하는데, 이 컴포넌트 안에서 context값을 핸들링 하고 있다. react-redux를 기준으로 한다면 앱을 실행할 때 아래와 같은 방법으로 앱을 선언할 것이다. <br>

```javascript
<Provider store={store}>
  <App/>
</Provider>
```
Provider의 역할은 우리의 App이 Redux.store에 접근할 수 있도록 해준다.<br>

<img src="https://user-images.githubusercontent.com/77400522/138813813-60e3d2fa-d891-46f2-9d40-a6c862cf1685.png" witdh="100%" height="100%" /><br>

## connect()
- React.redux는 connect() 함수를 제공하여 우리의 컴포넌트를 store에 연결할 수 있도록 해줍니다. connect는 HOC(Higher-Order Component) 패턴이라고 하며 HOC란 컴포넌트를 특정 함수로 감싸서 특정 값 또는 함수를 props로 받아와서 사용할 수 있게 해주는 패턴입니다. 즉, connect 함수는 스토어의 상태를 props로 주입시켜주는 mapStateToProps와 액션 생성 함수를 스토어의 dispatch와 연결시켜 props로 주입시켜주는 mapDispatchToProps를 인자로 받아서 새로운 HOC를 반환한다. 

## Hoc
- 리액트는 함수형 프로그래밍을 지향한다.
- 컴포넌트는 (순수)함수이다. 즉, props를 받고 ReactElement 트리를 반환하는 순수함수이다.
- 함수형 프로그래밍에서는 Higher Order Function(HOF)라는 HOC와 유사한 개념이 있다.
- HOF는 함수를 인자로 받아서 새로운 함수를 반환하는 함수이다.
- HOF의 장점은 함수에 기능을 추가하는 코드를 재사용 할 수 있다는 것이다.
- Higher Order Component(HOC)는 바로 HOF에서 유래한 단어이다.
- 즉, 컴포넌트를 인자로 받아서 컴포넌트를 반환하는 함수를 뜻한다.
- 가장 많이 쓰이는 형태는 스토어와 컴포넌트를 연결시켜 주는 HOC
- 최근 가장 널리 쓰이는 react-redux의 connect 함수도 이런 역할을 하는데, 엄밀히 말해 Hoc를 생성해주는 헬퍼 함수라고 할 수 있다.

### HOC로 할 수 있는 중요한 기능들
1. 생명주기 메소드 주입
2. State 및 이벤트 핸들러 주입
3. Props 변환 및 주입
4. Render 함수 확장

## ReactNode / ReactElement
- 클래스형 컴포넌트는 render 메소드에서 ReactNode를 리턴한다.
- 함수형 컴포넌트는 ReactElement를 리턴한다.
- jsx는 바벨에 의해서 React.createElement(component, props, ...children)함수로 트랜스파일 된다.

## jsx
```javascript
<div>Hello {this.props.toWhat}</div>
<Hello toWhat="World" />
```

## jsx --> babel(transpile)
```javascript
React.createElement('div', null, `Hello${this.props.toWhat}`);
React.createElement(Hello, {toWhat:'World'}, null);
```

## 이 React.createElement의 리턴 타입이 바로 ReactElement와 JSX.Element이다.
- 정리하자면 함수형 컴포넌트안에서 사용된 jsx는 바벨에 의해서 React.createElement함수로 변환되고 이 변환된 함수가 ReactElement를 리턴한다. 

<img src="https://user-images.githubusercontent.com/77400522/138818797-252353bb-9aae-4a67-833d-064c55644420.png" width="100%" height="100%"/>

## ReactElement 호출시 리턴되는 객체
```javascript
interface ReactElement<P=any, T extends string | JSXElementConstructor<any>=string | JSXElementConstructor<any>> {
  types: T;
  props: P;
  key: Key | null;
}
```

## ReactNode
```javascript
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> { }
type ReactFragment = { } | ReactNodeArray;

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
```

## uaeSelector란 ?
- useSelector는 리덕스의 상태값을 조회하기 위한 hook 함수로 이전의 connect를 통해 상태값을 조회하는 것보다 훨씬 간결하게 작성하고 코드 가독성이 상승되는 장점이 있는 함수이다.

## 로컬 스토리지 vs 세션 스토리지
||로컬 스토리지|세션 스토리지|
|:---:|:---:|:---:|
|데이터 영구|O (사용자가 지우지 않는 한)|X (윈도우, 탭 닫을시 내용 제거)|
|사용방법|자동 로그인|일회성 로그인|
|주의사항|비밀번호와 같은 중요 정보는 절대 저장 X|비밀번호와 같은 중요 정보는 절대 저장 X|


쿠키의 단점을 보완해 HTML5에서 '웹스토리지' 라는 기술 탄생
- 웹스토리지: 로컬스토리지, 세션스토리지
- 웹스토리지는 Key와 Value 형태로 이루어짐
- 웹스토리지는 클라이언트에 대한 정보를 저장.
- 웹스토리지는 로컬에만 정보를 저장, 쿠키는 서버와 로컬에 정보를 저장.

- 로컬스토리지는 클라이언트에 대한 정보를 영구적으로 저장
- 세션 스토리지는 세션 종료 시(브라우저를 닫을 경우) 클라이언트에 대한 정보 삭제(일회성)

### 로컬&세션스토리지 장점
1. 서버에 불필요하게 데이터를 저장하지 않는다.
2. 용량이 크다. (약 5MB, 브라우저마다 차이 존재)
### 로컬&세션스토리지 단점
1. HTML5를 지원하지 않는 브라우저의 경우 사용 불가

- 현재 진행하는 프로젝트에서는 userId와 같은 정보를 로그인시에 로컬 스토리지에 저장하고 페이지를 이동하면서 필요할 때 로컬스토리지에 저장된 userId를 불러와서 사용하거나 자동로그인을 구현할 때 사용할 것이다. 구현하기에 앞서 실습 먼저 해보자.

## [실습] 웹스토리지(로컬스토리지)

```javascript
import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(() => JSON.parse(window.localStorage.getItem("count")) || 0);
  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

> useEffect() 함수는 count 상태값이 변경될 때마다 호출, 웹 스토리지는 오직 문자형 데이터만 지원하기 때문에 데이터를 쓰기전에 JSON.stringify() 함수로 직렬화하고, 읽기 전에 JSON.parse()함수로 역 직렬화 합니다.

## Serialize. 
### 직렬화와 역직렬화는 디스크로의 저장으로도 사용하지만 네트워크간의 데이터 전송에서도 많이 사용되는 개념. 

직렬화 ? (JSON.stringify())
- 객체를 직렬화하여 전송 가능한 형태로 만드는 것.
- 객체들의 데이터를 연속적인 데이터로 변형하여 Stream을 통해 데이터를 읽도록 해준다.

역직렬화 ? (JSON.parse())
- 직렬화된 파일 등을 역으로 직렬화하여 다시 객체의 형태로 만드는 것.
- 저장된 파일을 읽거나 전송된 스트림 데이터를 읽어 원래 객체의 형태로 복원한다.


<img src="https://user-images.githubusercontent.com/77400522/138825638-50836909-a05b-4496-b0ae-c698a216ca94.png" width="100%" height="100%" />

## Code Spliting 
- 싱글페이지 어플리케이션에서 번들 사이즈가 커지면 로딩속도나 성능면에서 문제가 생길 수 있다. 
- 코드 스플리팅은 이것들을 여러개의 번들로 나누거나 동적으로 import하는 기법을 말한다.

## Loadable Components
- React가 자체적으로 제공하는 React.lazy나 React.suspense도 있지만 SSR까지 커버 가능하고 사용방법이 거의 동일한 Loadable Components를 페이스북에서도 추천하고 있다.


⚙️ 진행상황: 게시글, 댓글, 좋아요 스키마 작성, REST API 테스트 및 작성 완료, 리액트 구현 ing <br>
개념보완 키워드: # useCallback, useEffect 차이점 # 몽구스 populate, ref 참조



## 📄 10/27 (수)

#### useMemo와 useCallback은 리액트의 렌더링 성능 최적화를 위한 hook
- 함수형 컴포넌트는 그냥 함수이고 단지 jsx를 반환하는 함수이다.
- 컴포넌트가 렌더링 된다는 것은 누군가가 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다. 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또 다른 함수 등)도 매번 다시 선언되어 사용된다.
- 컴포넌트는 자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링 된다. (하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링 되는것이 기본)

## useMemo
- 메모리제이션된 값을 반환한다.
- CASE: 특정 상황에서만 동작되어야 하는 함수가 Component의 렌더링 조건에 따라 지속적으로 함수가 실행되는 경우
- useMemo는 deps가 변경되기 전까지 값을 기억하고, 실행 후 값을 보관하는 역할로도 사용한다.
- 복잡한 함수의 return 값을 기억한다는 점에서 useRef와는 다르다.
- useRef는 특정 값을 기억하는 경우, useMemo는 복잡한 함수의 return값을 기억하는 경우에 사용한다.

## useCallback
- 메모리제이션된 함수를 반환한다.
- CASE: useMemo가 특정 value를 재사용하기 위함이라면 useCallback은 특정 함수를 재사용하기 위함이다.
- 자식 컴포넌트에 함수를 props로 줄때는 반드시 useCallback을 사용하여 리렌더링이 안되도록 하자.

### 브라우저와 리액트앱의 라우터를 연결하게 되면 그 결과 라우터가 history api에 접근할 수 있게 되며 각각의 Route와 연결된 컴포넌트에 props로 match, location, history라는 객체를 전달하게 된다.

## Match
- match 객체에는 <Route path>와 URL이 매칭된 것에 대한 정보가 담겨져있다.
- 대표젹으로 match.params로 path에 설정한 파라미터값을 가져올 수 있다. 
> 현재 프로젝트에서 REST API를 작성할 때 파라미터로 값을 넘겨주는 URL을 많이 포함하고 있는데 파라미터 값을 가져올 때 사용해봐야겠다.
 
- path: [string] 라우터에 정의된 path
- url: [string] 실제 클라이언트로부터 요청된 url path
- isExact: [boolean] true일 경우 전체 경로가 완전히 매칭될 경우에만 요청을 수행
- params: [JSON object] url path로 전달된 파라미터 객체
 
## Location
- location 객체에는 현재 페이지의 정보를 가지고 있다. 대표적으로 location.search로 현재 url의 쿼리 스트링을 가져올 수 있다.
  
> 게시글 리스트의 경우 두가지 버전으로 나누어 백단 로직을 짜놓았고 하나는 쿼리스트링을 사용한 페이지네이션이고 다른 하나는 body로 페이지번호를 입력받는 페이지네이션이다. 나는 후자의 경우로 페이지네이션을 사용할 것이므로 location.search를 사용할 일은 없을 것 같다.
  
- path: [string] 현재 페이지의 경로명
- search: [string] 현재 페이지의 query string
- hash: [string] 현재 페이지의 hash
  
## History
history 객체는 브라우저의 history와 유사하다. 스택(stack)에 현재까지 이동한 url 경로들이 담겨있는 형태로 주소를 임의로 변경하거나 되돌아갈 수 있도록 해준다.

- length: [number] 전체 history 스택의 길이
- action: [string] 최근에 수행된 action (PUSH, REPLACE, or POP)
- location: [JSON object] 최근 경로 정보
- push(path, [state]): [function] 새로운 경로를 history 스택으로 푸시하여 페이지를 이동
- replace(path, [state]): [function] 최근 경로를 history 스택에서 교체하여 페이지를 이동
- go(n): [function] history 스택의 포인터를 n번째로 이동
- goBack(): [function] 이전 페이지로 이동
- goForward(): [function] 앞 페이지로 이동
- block(prompt): [function] history 스택의 PUSH/POP 동작을 제어
  

## Mongoose란 ?
Node.js와 MongoDB를 연결해주는 ODM(Object Document Mapping): 객체와 문서를 1대1로 매칭하는 역할 
 
## Populate 
MongoDB 스키마를 만들다 보면 필드 내에 다른 다큐먼트의 ObjectID를 쓰는 경우가 존재.
> 현 프로젝트에서는 board, comment, like 스키마가 해당된다. (게시글, 댓글, 대댓글, 좋아요)
  
## 스키마 정보 1
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});
```
  
## 데이터 조회 1
  
```javascript
{
  _id: { $oid: 5a23c1b5d52a003c98e13flc },
  name: 'hongjinhyeok',
  age: 25,
  stories: { $oid : 5a23c1b5d52a003c98e13flb }
}
```
  
  
## 스키마 정보 2
```javascript
const storySchema = Schema({  
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ types: Schema.Types.ObjectId, ref: 'Person' }]
});
```

## 데이터 조회 2
```javascript
{
  _id: { $oid: 5a23c1b5d52a003c98e13flc },
  name: 'hongjinhyeok',
  age: 25,
  stories: { 
    author: { $oid: 5a23c1b5d52a003c98e13fld },
    title: 'How to be a good programmer',
    fans: { $oid: 5a23clb5d52a003c98e13fld }
  }
}
```
- 이렇게 populate를 활용하면 Schema.Types.ObjectId가 참조하는 다른 document를 조회할 수 있다.  
  
- populate는 간단하게 이런 id값을 펼쳐서 보여주는 기능.
- populate $oid로 모두 조회를 해서 자바스크립트단에서 합쳐주는 것
- JOIN처럼 DB 자체에서 합쳐주는 것이 아니므로 성능이 좋지 못하다.
- 특히 populate가 중첩되면 성능 문제사 생길 확률이 크다.
 
  
1. 쿼리스트링으로 페이지네이션을 구성할 경우에 게시글이 삭제될때 공백이 생기는 상황 발생.
2. 게시글 컴포넌트들은 상위 컴포넌트로부터 props를 받고 있는데 useEffect, useCallback 등을 사용하지 않아 렌더링 낭비 이슈 확인.
3. 리팩토링할 때 게시글, 좋어요, 댓글 라우터의 axios중 사용된 자주 사용된 주된 axios들을 리덕스로 구성하고 user 리덕스와 콤바인할 것.
4. 콘솔로 props 값을 찍어줘서 렌더링 낭비 확인 후 렌더링 최소화하기.
남은 기능: 댓글 달기 기능, 댓글 삭제 기능, 게시글 작성 기능, 게시글 수정 기능
남은 기능 구현 후 리팩토링 진행.
  
⚙️ 진행상황: 게시글 리스트 가져오기, 사용자 id, name 로그인시 로컬스토리지에 저장, 로그아웃시 로컬스토리지 정보 삭제, 게시글 삭제 버튼 구현, 게시글 좋아요 버튼 구현




## 📄 10/28 (목)

- 에러 : 댓글 작성/삭제 후 댓글 수 새로고침해야 변경, 삭제버튼 최상단 한번 더 찍히는 오류
⚙️ 추가사항: 대댓글 추가하기, 자신의 게시글에 댓글을 달 경우 이름을 작성자로 표시하기
  
 
- 댓글을 작성 또는 삭제 할 수 있는 페이지 url에는 boardId가 포함되어 있으므로 props.location.pathname을 사용하여 댓글을 삭제하거나 등록하고 나서
현재 페이지로 이동시키고 새로고침이 동반되어야 하므로 window.location.replace('${props.location.pathname}');을 사용하여 해결.  
- 삭제버튼(게시글 작성자, 댓글 작성자 동일)과 게시글 작성자가 자신의 게시글의 댓글을 달 경우 삼항 연산자를 사용하여 현재 게시글을 작성한 사람의 id와 댓글을 등록하는 사람의 id가 같으면 (작성자) 추가해주기.

  
⚙️ 진행상황: 대댓글 스키마 작성하기, 라우터 로직 작성하기
- 11/1까지 -> 게시글, 마이페이지 부분 redux 사용하여 코드 리팩토링하기.

  
## 📄 10/29 (금)

- 현재 프로젝트에서 게시글 부분은 전역 상태 관리를 사용하지 않고 useState를 사용하여 상위 컴포넌트에서 하위 컴포넌트로 props를 사용하여 데이터를 전달하였는데 요즘 추세가 redux를 사용하지 않고 context api를 사용한다고 해서 게시글 부분은 context API를 사용하여 전역 상태 관리를 해볼까 했지만 차이점을 보고 리덕스 사용을 유지해야겠다고 생각했다...redux는 전역 상태 관리 외에도 다양한 기능을 제공하기 때문이다.
  
  
## Redux와 Context API 차이
둘 다 전역 상태 관리를 위한 도구이지만 차이는 존재한다. <br>
Context API는 high-frequency updates에 좋지 않은 성능을 보이지만 Redux는 그렇지 않다 <br>
- 로컬 스토리지에 상태를 영속적으로 저장하고 시작할 때 다시 불러오는데 특히 뛰어나다.
- 상태를 서버에서 미리 채워서 HTML에 담아 클라이언트로 보내고 앱을 시작할 때 다시 불러오는데 특히 뛰어나다.
- 사용자의 액션을 직렬화해서 상태와 함께 자동으로 버그 리포트에 첨부할 수 있다. 개발자들은 이를 통해 에러를 재현할 수 있다.
- 액션 객체를 네트워크를 통해 보내면 코드를 크게 바꾸지 않고도 협업 환경을 구현할 수 있다.
- 실행취소 내역의 관리나 낙관적인 변경을 코드를 크게 바꾸지 않고도 구현할 수 있다.
- 개발할 때 상태 내역 사이를 오가고 액션 내역에서 현재 상태를 다시 계산하는 일을 TDD 스타일로 할 수 있다.
- 개발자 도구에게 완전한 조사와 제어를 가능하게 해서 개발자들이 자신의 앱을 위한 도구를 직접 만들 수 있게 해준다.
- 비즈니스 로직 대부분을 재사용하면서 UI를 변경할 수 있게 해준다.

  
## TDD (Test-Driven Development)

## TDD란 ?
- TDD는 소프트웨어 개발 방법론 중 하나로써 테스트 코드를 먼저 작성한 후, 구현 코드 작성단계와 리택토링 단계를 짧은 주기로 반복하여 개발하는 '테스트 주도 개발 방법론'이다.
  
  
## TDD를 통해 얻을 수 있는 것
  
### 목표
  - 단기적인 목표와 장기적인 목표를 뚜렷하게 제시해주고 올바르게 잡아줌
### 리듬
  - 반복되는 짧은 개발 패턴을 통해 개발 리듬을 만듦으로써 개발 집중력을 높여줌
### 소통
  - 테스트 코드는 사용설명서 혹은 API 문서로서의 의사소통의 도구로 활용 가능
### 개선
  - TDD를 행함으로써 개발하고 있는 코드의 문제점을 빠르게 잡아낼 수 있음
### 성취감
  - TDD의 짧은 사이클 내에서 테스트 코드를 통과하는 구현체 코드 작성을 통해, 무엇인가를 완성했다는 성취감을 느낄 수 있음
  
## TDD 실행 단계
  
RED(실패하는 테스트를 작성) -> GREEN(테스트에 통과하는 코드를 작성) -> REFACTOR(불필요한 코드를 제거)
  
  
⚙️ 진행상황: 대댓글 작성, 삭제, 조회 구현 
- 에러: 댓글 삭제시 몽고디비에서 대댓글 삭제되지 않는 점, 게시글 삭제시 해당 게시글에 달린 댓글과 대댓글이 몽고디비에서 삭제되지 않는 점
- 해결해야 할 과제: 댓글 삭제시 대댓글 전체 삭제, 게시글 삭제시 댓글, 대댓글 전체 삭제 백단 로직 만들기, 댓글 클릭시에만 대댓글 작성창 띄우기
- 해결: 댓글 삭제시 대댓글 전체 삭제, 게시글 삭제시 댓글, 대댓글 전체 삭제 백단 로직 만들기
  
- 에러: 해당 게시글 작성자가 아님에도 불구하고 게시글을 작성하고나서 댓글 옆에 작성자 표시, 다른 아이디로 로그인시에는 작성자 해제, 즉 작성자 표시가 제대로 되지 않음
- 해결해야 할 과제: 게시글 삭제시 좋아요도 함께 삭제하기(해결), 작성자 이름 표시 기능 코드 수정하기(해결), 대댓글 작성창 띄우기(해결)
- 에러: 댓글 삭제시 clean up 에러 발생 -> 메모리 누수(useEffect)

## 메모리 누수란 ?
  
- 메모리 누수는 부주의 또는 일부 프로그램 오류로 인해 더 사용되지 않는 메모리를 해제하지 못하는 것이다. 간단히, 어떤 변수가 100M 메모리를 점유한다고 할 때, 이 변수가 사용되지 않더라도 수동 또는 자동으로 해제되지 않아 계속 메모리를 점유하는 것을 말한다.
  

## 스택 메모리와 힙 메모리
- 자바 스크립트 메모리는 단순 변수에 사용되는 스택 메모리와 복잡한 객체에 사용되는 힙 메모리로 구분된다.
- 단순 변수들은 원시타입이라고 불리며, String, Number, Boolean, Null, Undefined, Symbol, Bigint등이 있다.
- 복잡한 객체는 참조 데이터 타입이라고 불리며, Object, Array, Function 등이 있다.
  
  <img src="https://user-images.githubusercontent.com/77400522/139429836-c574320a-47f8-4afb-816c-8aad1ba68b99.png" width="100%" height="100%" />
  <img src="https://user-images.githubusercontent.com/77400522/139429855-18a0b961-9d30-4dfb-b8cc-3f9f37a905e8.png" width="100%" height="100%" />
  
#### 댓글 작성, 대댓글 작성시 메모리 누수 확인.
#### 해결 : useEffect()에 빈괄호를 넣어주지 않아 계속 렌더링이 되고 있었다...
  
#### 댓글작성 또는 대댓글 작성시 클라이언트 터미널에서 [HPM] Error occurred while trying to proxy request 에러 발생
#### 공통점 : 댓글 작성, 대댓글 작성시 window.location.replace()로 새로고침 진행, 새로고침 삭제 => 해결
#### 새로고침 이유 : 댓글 작성시 댓글 수 실시간 변동 해주기 위해서, 대댓글 작성시 게시글 작성자가 아님에도 불구하고 첫 댓글에는 작성자 표시   
#### 게시글 삭제시에 Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 에러 발생
#### 원인: res.json 중복 처리
#### 해결: 게시글 삭제 로직 수정 (중복 삭제) 
  
## 수정 전
```javascript
router.delete('/:uid/:boardId', async (req, res) => {
  try{
    await Board.findOneAndDelete({ _id: req.params.boardId, userFrom: { $eq: req.params.uid }})
    .exec((err, result) => {
      if(err) return res.status(400).send(err);
      return res.status(200).json({ success: true, result })
    })    
    const removedComment = await Comment.deleteMany({ userFrom: req.params.uid });
    const removedReply = await Reply.deleteMany({ userFrom: req.params.uid });
    const removedLike = await Like.deleteMany({ userFrom: req.params.uid });
    res.json(removedComment);
    res.json(removedReply);
    res.json(removedLike);
  } catch (err) {
    res.json({ message: err });
  }
})  
```  

## 수정 후
```javascript
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
```  

  
- ⚙️ 진행상황: 대댓글 구현완료, 에러 해결
- 예정과제: 
1. 게시글 수정, 댓글 수정, 대댓글 수정 구현하기 (마이페이지 구현시)
2. 댓글 클릭시에 작성칸 띄우기
3. 대댓글 달려있는 댓글 위에 댓글 작성할 시에 대댓글 고정되는 문제 해결하기
  
- 해결: 대댓글 최초 등록시 게시글 작성자가 아님에도 불구하고 작성자 표시에러 해결
- 작성자를 확인하는 axios를 담고 있는 useEffect()로직 안 deps에 빈공간을 줘서 마운트시 한번만 렌더링 시킬 경우에 페이지 이동이 없기 때문에 결과값이 즉각 반영되지 않고 새로고침 해야 반영된다. 하지만 새로고침할 경우 에러가 발생했기 때문에 새로고침 해주지 않고 상위 컴포넌트인 boardDetail에서 axios로 댓글 목록을 가져올 경우 res에 commentCounts도 함께 가져오는데 이를 이용하여 댓글개수가 바뀔 때마다 렌더링을 해준다면 등록시에 즉각 결과값이 반영되므로 commentCounts를 하위 컴포넌트로 전달하여 사용.

- 해결: 댓글 삭제 또는 등록시에 실시간으로 댓글수 변경하기
- 위와 같은 맥락으로 상위 컴포넌트로부터 댓글수를 표시해주는 하위 컴포넌트까지 props 데이터를 전달하여 실시간으로 변경해주었다. useState를 사용하여 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주는 것은 불편하기에 리덕스를 사용하여 코드 리팩토링을 진행해야겠다.

## 📄 10/30 (토)  
  
- ⚙️ 진행과제:
1. 코드 리팩토링 진행(리덕스)
  
- 게시글, 댓글, 대댓글, 좋아요를 구현할 때 사용했던 axios들을 한데 모아 이름을 정의하여 타입을 설정해준다음 리듀서와 액션 폴더안에 로직을 작성했다. 기존에 사용했던 axios 코드들을 모두 dispatch로 바꿔주는 작업을 하였고 데이터들 중에서 전역으로 상태관리가 필요한 것들은 useSelector로 조회하여 사용하려고 했지만 게시판에는 생각보다 전역으로 상태관리가 필요한 것들은 많지 않았다. 게시글 상세보기에서는 댓글 개수를 useEffect deps에 넣어 댓글이 등록 또는 삭제 될 경우 개수를 실시간으로 바꿔주었으나 게시글 목록에 보여지는 댓글수는 연결이 되지 않아 undefined가 떳었는데 useSelector를 이용하여 값을 가져와 게시글 목록에 출력했다. 또한 댓글수 변화에 있어서 댓글 length로 관리해주지 않고 더 정확하게 하기 위해서 등록시에 값이 변경되는 uploadSuccess와 삭제시에 값이 변경되는 deleteSuccess를 넣어 더 정확하게 했다. 해당 값들은 Boolean 타입이다.
  
- 에러: 작성자가 표시되지 않는 문제
- 게시글을 작성한 사용자가 댓글 또는 대댓글을 게시할 경우에는 이름 옆에 작성자 표시가 떠야하는데 모두 작성자라고 뜨거나 모두 표시되지 않는 문제가 있었다. 디스패치로 바꾸는 과정에서 UserId를 로컬 스토리지에서 가져와서 사용하였는데 이것이 원인이었다. props.user로 userid를 가져와 사용할 경우에 모든 유저 아이디를 객체로 가져와 사용할 수 있어서 값을 비교하여 작성자 또는 그렇지 않는 유저로 나눴으나 로컬 스토리지로 가져올 경우 현재 접속한 아이디만 조회가 되기 때문에 모두 같은 결과(모든 사람 이름 옆에 작성자 표시)를 보았던 것이었다...
  
## 📄 10/31 (일)
- ⚙️ 진행상황: 게시판 완료, 마이페이지(이메일 변경, 비밀번호 변경, 깃헙 변경, 회원탈퇴) REST API 구현 및 테스트, 리액트 마이페이지 리스트 구현(axios)
 
- 첫 프로젝트를 진행할 때는 콘솔창의 워닝을 크게 신경쓰지 않았지만 나중에 이런 작은 워닝들이 에러를 일으킬 수도 있기 떄문에 지금은 항상 콘솔창의 에러를 보면서 구현하고 있다. 깨끗한 콘솔창을 보면 기분이 너무 좋다. 하지만 오늘도 어김없이 게시판을 모두 구현하고 사용자 입장에서 여러 테스트를 해보면서 개선할 점을 찾고 있던 와중에 콘솔창에 clean up에러를 발견하였고 메모리 누수가 있는 부분의 useEffect AbortController를 공식문서를 참고하여 구현해보았다. 이후 다시 clean up이 사라졌지만 특이한 현상을 발견하였다. 대댓글 보기를 빠르게 연속으로 클릭하여 누를 때 다시 이러한 에러가 뜨는 것이다. useEffect의 deps에는 []으로 첫 마운트시 렌더링 되는데 연속하여 클릭함으로써 통신속도를 따라 잡지못해 이러한 에러가 발생하는 것 같다.
  
## 📄 11/1 (월)
⚙️ 완료상황: 마이페이지 구성(게시글 수정, 댓글 수정 구현), 내가 쓴 글, 내가 쓴 댓글, 내가 댓글 단 글, 내가 대댓글 단 댓글 구현<br>
⚙️ 진행상황: 마이페이지: axios -> useDispatch 변경 작업
  
```javascript
useEffect(() => {
    const userFrom = localStorage.getItem('userId');
    dispatch(getMyComment({ userFrom: userFrom })).then(response => {
      if (response.payload.success) {
        saveOptions(response.payload.comments);
      } else {
        alert('대댓글을 불러오는데 실패했습니다.');
      }
    });
}, []);
  
const saveOptions = comments => {
  const commentsList = [];
  comments.forEach(element => {
    commentsList.push(element.boardFrom;
  });
  setCommentFrom(
    [...new Set(repliesList.map(JSON.stringify))].map(JSON.parse),
  );
}
```

console.log(response.payload.comments),console.log(element.boardFrom),console.log(commentsList)<br>
||댓글목록|댓글목록|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/77400522/139793907-f9d72a9a-c4ab-487d-b97c-cd9240757702.png" height="100%" width="100%" />|  <img src="https://user-images.githubusercontent.com/77400522/139793994-bdb83f35-64ec-4d14-99a0-e1b1f2beda42.png" width="100%" height="100%">|  <img src="https://user-images.githubusercontent.com/77400522/139793998-f5614a0b-37ba-44f2-b2b3-72d03dbd7eee.png" width="100%" height="100%">|

  
  
## 📄 11/2 (화)
- 완료상황: 게시판 리스트에서 이름 클릭시 회원 정보 조회(이메일, 자기소개), 대댓글 보기 클릭시 모든 댓글에 달린 대댓글 보기가 활성화되는 에러 해결 
- 대댓글 보기 클릭시 해당 comment._id를 가져와 commentId에 저장한다음 comment._id와 commentId가 동일할 경우의 조건을 추가하여 해결
- ⚙️ 진행상황: 11/10 ~ [채팅, 메일보내기 기능구현 (팀프로젝트 진행)], 게시판 코드리뷰
- 코드리뷰 후 보완해야 할 주제 키워드 : 페이지네이션 skip, limit, innerText와 textContent 차이
  
    
## 📄 11/3 (수)
- ⚙️ 진행상황: 코드 마무리(사용자 입장에서 에러 찾기), css 적용, concurrently 적용, 개인프로젝트 종료.
  
  
## 📄 11/4 (목)
```javascript
router.post('/getBoard', (req, res) => {
  const Page = req.body.page;
  Board.countDocuments({}, (err, count) => {
    if(err) {
      return res.status(400).send(err);
    } else {
      Board.find()
      .sort({ createdAt: -1 })
      .skip((Page-1)*10))
      .limit(10)
      .populate("userFrom")
      .exec((err, boards) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, boards, count });
      })  
    }
  }) 
})  
```  
  
```javascript
# 코드해석
filter 옵션을 파라미터로 받지만 옵션이 비어있으므로 필터 옵션은 없다.
find 조건에 따라서 1페이지를 가정한다면, 데이터를 내림차순으로 정렬하고, 0부터 ~ 9까지의 데이터를 보여준다.
2페이지를 가정한다면, 10부터 ~ 19까지의 데이터를 보여준다.
skip은 시작점을 가르키고 limit은 페이지당 보여지는 데이터의 갯수를 의미한다.
```
  
## innerHTML, innerText, innerContent의 차이
```html
<div id='my_div'>
  안녕하세요 ? 만나서 반가워요 
  <span styled='display: none'>숨겨진 텍스트</span>
</div>
```

- innerHTML
1. innerHTML은 'Element'의 속성으로, 해당 Element의 HTML, XML을 읽어오거나 설정할 수 있다.
<img width="312" alt="스크린샷 2021-11-04 오후 4 05 08" src="https://user-images.githubusercontent.com/77400522/140271566-8bddf11e-574a-40e5-8005-587cadbe7a28.png">

  
- innerText
1. innerText은 'Element'의 속성으로, 해당 Element 내엣 사용자에게 '보여지는' 텍스트 값으 읽어온다.
<img width="182" alt="스크린샷 2021-11-04 오후 4 05 14" src="https://user-images.githubusercontent.com/77400522/140271576-b7436dff-0682-4a54-92ec-8fd371f551c5.png">

  
- textContent
1. textContent은 'Node'의 속성으로, innerText오 달리 <script>나 <style> 태그와 상관없이 해상 노드가 가지고 있는 텍스트 값을 그대로 읽는다.
<img width="201" alt="스크린샷 2021-11-04 오후 4 05 22" src="https://user-images.githubusercontent.com/77400522/140271549-1e09cec4-9927-42be-b97c-3b70a5cde5aa.png">

  
  
  
  
  
  
