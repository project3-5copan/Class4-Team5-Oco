import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../pages/Main";
import Upbitchart from "../../pages/Upbitchart";

const MainRouter = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Main} /> */}
      <Route exact path="/board" component={Upbitchart} />
      <Route exact path="/trade" component={Upbitchart} />
    </Switch>
  );
};

export default MainRouter;
