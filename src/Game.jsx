import React, { useState } from "react";

import { Slot } from "./Slot";
import { createSlots, calculatePoints } from "./utils";

import { PLAYER, GAMESTATE, SLOTSTATE } from "./constants";

const DEFAULT_GAME_STATE = {
  currentPlayer: PLAYER.RED,
  currentValue: GAMESTATE.START_VALUE,
  slots: createSlots(),
  status: GAMESTATE.ONGOING,
};

const scoreboard = ({ blueScore, redScore }) => (
  <div>
    <h2>
      {redScore < blueScore
        ? "RED wins!"
        : blueScore < redScore
        ? "BLUE wins!"
        : "It's a tie!"}
    </h2>
    <strong>RED:</strong> {redScore}
    <br />
    <strong>BLUE:</strong> {blueScore}
  </div>
);

const Game = () => {
  const [gameState, setGameState] = useState(DEFAULT_GAME_STATE);

  const clickHandler = (slot) => {
    const newSlot = gameState.slots[slot.i];
    newSlot.number = gameState.currentValue;
    newSlot.color = gameState.currentPlayer;
    newSlot.state = SLOTSTATE.SELECTED;

    const newValue =
      gameState.currentPlayer === PLAYER.RED
        ? gameState.currentValue
        : gameState.currentValue + 1;
    const newPlayer =
      gameState.currentPlayer === PLAYER.RED ? PLAYER.BLUE : PLAYER.RED;

    let status = gameState.status;
    if (newValue === 11) {
      status = GAMESTATE.FINISHED;
    }

    setGameState({
      currentPlayer: newPlayer,
      currentValue: newValue,
      slots: gameState.slots,
      status,
    });
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h1>
        {gameState.status === GAMESTATE.ONGOING
          ? `${gameState.currentPlayer}'s turn, place ${gameState.currentValue}`
          : gameState.status}
      </h1>
      <div className="gameboard">
        {gameState.slots.map((slot) => {
          return (
            <Slot
              slot={slot}
              onClick={clickHandler}
              key={`${slot.idx[0]}-${slot.idx[1]}`}
              gameStatus={gameState.status}
            />
          );
        })}
      </div>
      <div>
        {gameState.status === GAMESTATE.FINISHED ? (
          <div>{scoreboard(calculatePoints(gameState.slots))}</div>
        ) : null}
      </div>
    </div>
  );
};

export { Game };
