import React from "react";
import "./card.styles.css";
function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.Single_monster.id}?set=set5&size=180x180`}
        alt="Monster"
      />
      <h1>{props.Single_monster.name}</h1>
      <p>{props.Single_monster.email}</p>
    </div>
  );
}

export default Card;