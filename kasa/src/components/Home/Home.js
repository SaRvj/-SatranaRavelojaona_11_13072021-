import React, { Component } from "react";
import Section1 from "./Section1";
import "./home.css";
import Accommodations from "../accommodation/Accommodations";

//Ce composant est la vue de la page Home
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Section1 />
        <Accommodations />
      </div>
    );
  }
}
