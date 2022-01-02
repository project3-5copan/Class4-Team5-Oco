import React from 'react';
import Board from "./views/Board";
import Routes from "./routes/Routes";
import "./Views.css";
import { useHistory } from 'react-router';

function Views() {
    const history = useHistory();

    function onClickNewPostButton() {
        history.push("/insert");
    }

    function onClickControlButton() {
        history.push("/control");
    }

    return (
        <div >
            <div id="header" className="header">
                <div >
                    <h3>Board CRUD</h3>
                </div>
                <div>
                    <div>
                        <button onClick={onClickNewPostButton}>새글</button>
                    </div>
                    <div>
                        <button onClick={onClickControlButton}>설정</button>
                    </div>
                </div>
            </div>
            <div id="sidebar" className="sidebar">
                <Board />
            </div>
            <div id="content" className="content">
                <Routes />
            </div>
        </div>
    );
}

export default Views;
