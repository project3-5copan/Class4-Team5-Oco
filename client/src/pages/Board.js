import React from 'react';
import { Route, withRouter } from 'react-router';
import BoardView from 'components/Board/BoardView';
import BoardDetail from 'components/Board/BoardDetail';

function Board({ match }) {
  return (
    <>
      <Route exact path={match.path} component={BoardView} />
      <Route exact path={`${match.path}/:boardId`} component={BoardDetail} />
    </>
  );
}

export default withRouter(Board);
