import React from "react";
import "./card__list.scss";
import Card from "../card/Card";

const Card__list = ({ monsters }) => (
  <div className="cardList">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
export default Card__list;
