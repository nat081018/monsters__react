import React from "react";
import "./card.scss";

const Card = ({ monster }) => {
  return (
    <div className="card" key={monster.id}>
      <img
        alt="img"
        src={`https://robohash.org/${monster.id}?/set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
