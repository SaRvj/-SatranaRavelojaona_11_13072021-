import React, { Component } from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import "./FicheLogement.css";

//Ce composant est utilisé par Profil.js pour transformer les données de notation en étoiles
export default class Rating extends Component {
  render() {
    let rating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= this.props.rating) {
        rating.push(<Star fill="#FF6060" key={Math.random()} className="filled_star" />);
      } else {
        rating.push(<Star fill="#E3E3E3" key={Math.random()} className="empty_star" />);
      }
    }

    return <div className="accommodation_rating">{rating}</div>;
  }
}
