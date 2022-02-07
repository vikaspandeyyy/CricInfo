import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PlayersLists from "./PlayersLists";
import "./Cricket.css";

function Cricket() {
  const [filtered, setfiltered] = useState([]);
  const [first, setfirst] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://rest.entitysport.com/v2/competitions/111297/squads/?token=ec471071441bb2ac538a0ff901abd249`
      )
      .then((res) => {
        const responce = res.data.response.squads;
        let players = [];
        responce.forEach((row) => {
          players.push(...row.players);
        });
        console.log(players);
        console.log(responce);
        setfiltered(players);
        setfirst(players);
      });
  }, []);

  const filterData = (e) => {
    let word = e.target.value;
    if (word === "All") {
      setfiltered(first);
    } else {
      const Items = first.filter((x) => x.playing_role === word);
      setfiltered(Items);
    }
  };

  return (
    <>
      <Navbar />

      <div className="TableData">
        <div className="buttonGp">
          <button
            type="button"
            className="clickBtn"
            onClick={filterData}
            value="bowl"
          >
            Bowler
          </button>

          <button
            type="button"
            className="clickBtn"
            onClick={filterData}
            value="bat"
          >
            BatsMan
          </button>
          <button
            type="button"
            className="clickBtn"
            onClick={filterData}
            value="wk"
          >
            Wicket Keeper
          </button>

          <button
            type="button"
            className="clickBtn"
            onClick={filterData}
            value="all"
          >
            All-Rounder
          </button>
          <button
            type="button"
            className="clickBtn"
            onClick={filterData}
            value="All"
          >
            All Cricketers
          </button>
        </div>
      </div>
      <div className="playerList">
        {filtered.map((player) => (
          <PlayersLists
            title={player.title}
            role={player.playing_role}
            country={player.nationality}
            batting={player.batting_style}
            bowling={player.bowling_style}
          />
        ))}
      </div>
    </>
  );
}

export default Cricket;
