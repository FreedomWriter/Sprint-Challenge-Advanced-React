import React from "react";

export default function PlayerCard({ players }) {
  console.log(players);
  return (
    <div>
      {players.map(player => {
        return (
          <div className="card-container card">
            <p>{player.name}</p>
            <p>{player.country}</p>
            <p>{player.searches}</p>
          </div>
        );
      })}
      <p>hello</p>
    </div>
  );
}
