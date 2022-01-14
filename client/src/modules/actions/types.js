// USER (로그인, 회원가입, 이메일 중복확인, 토큰인증, 회원탈퇴)
export const REGISTER_USER = 'register_user'; // registerUser
export const LOGIN_USER = 'login_user'; // loginUser
export const CHECK_USER = 'check_user'; // checkUser
export const AUTH_USER = 'auth_user'; // auth
export const WITHDRAWAL_USER = 'withdrawal_user';

// USER 업데이트 (이메일, 비밀번호, 깃헙주소 변경)
export const UPDATE_EMAIL = 'update_email';
export const UPDATE_PASSWORD = 'update_password';
export const UPDATE_GITHUB = 'update_github';

// USER 정보 가져오기 (이메일, 깃헙주소)
export const GET_EMAIL = 'get_email';
export const GET_GITHUB = 'get_github';

// USER 댓글, 게시글 조회하기
export const GET_MYCOMMENT = 'get_myComment';
export const GET_MYBOARD = 'get_myBoard';
export const GET_MYREPLY = 'get_myReply';

// Board
export const UPLOAD_BOARD = 'upload_board';
export const GET_BOARD = 'get_board';
export const LIST_BOARD = 'list_board';
export const DELETE_BOARD = 'delete_board';
export const ISAUTHOR_BOARD = 'isauthor_board';
export const UPDATE_BOARD = 'update_board';

// Comment
export const UPLOAD_COMMENT = 'upload_comment';
export const GET_COMMENT = 'get_comment';
export const DELETE_COMMENT = 'delete_comment';
export const UPDATE_COMMENT = 'update_comment';

// Like
export const GET_LIKE = 'get_like';
export const ISCHECK_LIKE = 'ischeck_like';
export const SUBTRACTION_LIKE = 'subtraction_like';
export const ADDITION_LIKE = 'addition_like';
export const LIKE_LIST = 'list_list';

// Reply
export const UPLOAD_REPLY = 'upload_reply';
export const GET_REPLY = 'get_reply';
export const DELETE_REPLY = 'delete_reply';


export const LIST_COIN = 'list_coin';
