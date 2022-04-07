import React, { Component } from "react";
import star from "../../assets/star.svg";
import "./FicheLogement";

//Ce composant est utilisé par Rating.js et rend chaque étoile en fonction du score de l'hôte
export default class Rating extends Component {
  render() {
    return (
      <object className="rating" fill={this.props.fill} type="image/svg+xml" data={star} alt="star">
        {"Your browser does not support SVG "}
      </object>
    );
  }
}
