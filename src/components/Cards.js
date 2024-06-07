import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";

const Card = ({ title, description, imageSrc, link, animated }) => (
  <div className={`card ${animated ? "animated" : ""}`}>
    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
      <img src={imageSrc} alt={title} className="card-image" />
    </a>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="see-more">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>See more</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  </div>
);

export default Card;
