import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";

const Card = ({ title, description, imageSrc, animated }) => (
  <div className={`card ${animated ? "animated" : ""}`}>
    <img src={imageSrc} alt={title} className="card-image" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="see-more">
        <span>See more</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  </div>
);

export default Card;
