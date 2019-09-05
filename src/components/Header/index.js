import React from "react";
import "./style.css";

function Header(props) {
    console.log(props);
    return (
        <header className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-4"><h2>Clicky Game</h2></div>
                    <div className="col-4">
                        <h4>{props.status.clickStatus}</h4>
                    </div>
                    <div className="col-4">
                        <h4>Score: {props.status.score} | Top Score: {props.status.topScore}</h4>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;