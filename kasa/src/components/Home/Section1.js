import React, { Component } from "react";

//Ce composant affiche la première partie de la page Home

export default class Logo extends Component {
  render() {
    return (
      <div className="section1_container">
        <div className="figcaption_background" />
        <p className="figcaption">Chez vous, partout et ailleurs</p>
      </div>
    );
  }
}
