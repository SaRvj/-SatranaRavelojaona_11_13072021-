import React, { Component } from "react";
import logo from "../assets/logo.svg";

//Ce composant rend le logo Kasa
export default class Logo extends Component {
  render() {
    return (
      <div className="logo_container">
        <object className="logo" fill={this.props.fill} type="image/svg+xml" data={logo} alt="Kasa">
          {"Your browser does not support SVG "}
        </object>
      </div>
    );
  }
}
