import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../pages/Main";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/board" component={Main} />
      {/* <Route exact path="/trade" component={Main} /> */}
    </Switch>
  );
};

export default MainRouter;
