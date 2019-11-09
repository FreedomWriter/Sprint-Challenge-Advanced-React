import React from "react";

export default function PlayerCard({ players }) {
  return (
    <div>
      {players.map(player => {
        return (
          <div>
            <p>{player.name}</p>
            <p>{player.country}</p>
            <p>{player.searches}</p>
          </div>
        );
      })}
    </div>
  );
}
