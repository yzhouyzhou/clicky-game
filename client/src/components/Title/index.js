import React from "react";
import "./style.css";
import Background from "./math-background.jpg"

function Title(props) {
  var backgroundStyle = {
    width: "100%",
    height: "330px",
    background: `url(${Background}) no-repeat`,
    backgroundSize: "cover"
  };
  return (
    <div className="title">
      <div className="jumbotron text-center" style={ backgroundStyle }>
        <h2>Clicky Game!</h2>
        <h4>Click on an image to earn points, but don't click on any more than once!</h4>
      </div>
    </div>
  );
}

export default Title;
