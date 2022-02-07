import React from "react";
import "./Players.css";

function PlayersLists(props) {
  return (
    <div className="listSection">
      <div className="list">
        <div className="listItems">
          <p>Name: {props.title}</p>
          <p>Role: {props.role}</p>
          <p>Batting: {props.batting}</p>
          <p>Bowling: {props.bowling}</p>
          <p>Nationality: {props.country}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayersLists;
