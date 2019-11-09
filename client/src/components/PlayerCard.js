import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";

export default function PlayerCard({ players }) {
  const [darkMode, setDarkMode] = useDarkMode(false);
  console.log(players);
  return (
    <div>
      {players.map(player => {
        return (
          <div
            key={player.id}
            className={darkMode ? "card-container  toggled" : "card-container "}
          >
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
