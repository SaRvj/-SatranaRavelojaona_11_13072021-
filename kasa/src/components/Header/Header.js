import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";

//Ce composant rend le "header" de chaque page

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/">
          <Logo fill="#ff6060" className="header_logo" />
        </NavLink>
        <ul className="navbar">
          <NavLink exact activeClassName="current" className="nav-btn " to="/">
            <li className="nav-li">Accueil</li>
          </NavLink>
          <NavLink exact activeClassName="current" className="nav-btn" to="/about">
            <li className="nav-li">A Propos</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
