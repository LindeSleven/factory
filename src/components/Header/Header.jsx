import React from "react";
import ColorSettings from "../ColorSettings/ColorSettings";
import "./Header.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="header-colorsettings">
          <ColorSettings onChangeColor={props.onChangeColor} />
        </div>
        <div className="header-title">
          <h1 className="display-4">
            Factory
            <i className="fas fa-industry" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
