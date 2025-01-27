import React from "react";

import { IGlossaryItem } from "../../../interfaces/glossary-item.interface";

import "./Card.css";

export const Card: React.FC<IGlossaryItem> = ({
  term,
  definition,
  source
}) => {
  return (
    <div className="cardContainer">
      <a href={source} className="cardLink">
        <div className="cardTitle">
          <p>{term}</p>
        </div>
      </a>
      <div className="cardDefinition">
        <p>{definition}</p>
      </div>
    </div>

  )
}