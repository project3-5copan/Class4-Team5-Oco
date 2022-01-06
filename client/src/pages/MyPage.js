import React from 'react';
import { Route, withRouter } from 'react-router';
import PageList from 'components/MyPage/PageList';
import Email from 'components/MyPage/Section/Email';
import Password from 'components/MyPage/Section/Password';
import Github from 'components/MyPage/Section/Github';
import Withdrawal from 'components/MyPage/Section/Withdrawal';
import MyBoardList from 'components/MyPage/Section/MyBoardList';
import MyComment from 'components/MyPage/Section/MyComment';
import MyReply from 'components/MyPage/Section/MyReply';
import MyFavorite from 'components/MyPage/Section/MyFavorite';
import MyEditComment from 'components/MyPage/Section/MyEditComment';

function MyPage({ match }) {
  return (
    <>
      <Route exact path={match.path} component={PageList} />
      <Route path={`${match.path}/email`} component={Email} />
      <Route path={`${match.path}/password`} component={Password} />
      <Route path={`${match.path}/github`} component={Github} />
      <Route path={`${match.path}/boardList`} component={MyBoardList} />
      <Route path={`${match.path}/myComment`} component={MyEditComment} />
      <Route path={`${match.path}/comment`} component={MyComment} />
      <Route path={`${match.path}/reply`} component={MyReply} />
      <Route path={`${match.path}/favorite`} component={MyFavorite} />
      <Route path={`${match.path}/withdrawal`} component={Withdrawal} />
    </>
  );
}

export default withRouter(MyPage);
