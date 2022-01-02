import React, { Suspense, lazy } from 'react';
import { Route, Switch} from "react-router-dom";

function Routes() {
    const Main = lazy(() => import('../views/Main'));
    const ArticleList = lazy(() => import('../views/ArticleList'));
    const Article = lazy(() => import('../views/Article'));
    const Post = lazy(() => import('../views/Post'));
    const Control = lazy(() => import('../views/Control'));

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={"/"} exact component={Main} />
                    <Route path={"/board/:boardId"} exact component={ArticleList} />
                    <Route path={"/article/:articleId"} exact component={Article} />
                    <Route path={"/insert"} exact component={Post} />
                    <Route path={"/update/:articleId"} exact component={Post} />
                    <Route path={"/control"} exact component={Control} />
                    <Route path={"*"} component={Main} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Routes;