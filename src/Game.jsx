import React, { useState } from "react";

import { Slot } from "./Slot";
import { isAdjacent } from "./utils";

const PLAYER = {
  RED: "red",
  BLUE: "blue",
};

const createSlots = () => {
  let slots = [];
  let col = 0;
  let row = 0;
  for (let i = 0; i < 21; i++) {
    if (i === 6 || i === 11 || i === 15 || i === 18 || i === 20) {
      row += 1;
      col = 0;
    }
    const idx = [row, col];

    col += 1;

    slots.push({
      i,
      idx,
      state: "unselected",
      number: null,
      color: null,
      highlight: false,
    });
  }
  return slots;
};

const Game = () => {
  const [gameState, setGameState] = useState({
    currentPlayer: PLAYER.RED,
    currentValue: 1,
    slots: createSlots(),
    status: "ongoing",
  });

  const clickHandler = (slot) => {
    const newSlot = gameState.slots[slot.i];
    newSlot.number = gameState.currentValue;
    newSlot.color = gameState.currentPlayer;
    newSlot.state = "selected";

    const newValue =
      gameState.currentPlayer === PLAYER.RED
        ? gameState.currentValue
        : gameState.currentValue + 1;
    const newPlayer =
      gameState.currentPlayer === PLAYER.RED ? PLAYER.BLUE : PLAYER.RED;

    let status = gameState.status;
    if (newValue === 11) {
      status = "finished";
    }

    setGameState({
      currentPlayer: newPlayer,
      currentValue: newValue,
      slots: gameState.slots,
      status: status,
    });
  };

  const calculatePoints = () => {
    const blackHole = gameState.slots.filter(
      (slot) => slot.state === "unselected"
    )[0];
    const adjacentSlots = findAdjacent(blackHole);
    const redScore = adjacentSlots
      .filter((slot) => slot.color === PLAYER.RED)
      .reduce((acc, curr) => acc + curr.number, 0);
    const blueScore = adjacentSlots
      .filter((slot) => slot.color === PLAYER.BLUE)
      .reduce((acc, curr) => acc + curr.number, 0);
    return (
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
  };

  const findAdjacent = (slotA) => {
    const adjacentSlots = gameState.slots.filter((slotB) =>
      isAdjacent(slotA, slotB)
    );
    adjacentSlots.forEach((slot) => (slot.highlight = true));
    return adjacentSlots;
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h1>
        {gameState.status === "ongoing"
          ? `${gameState.currentPlayer}'s turn, place ${gameState.currentValue}`
          : gameState.status}
      </h1>
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "300px",
          margin: "auto",
        }}
      >
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
        {gameState.status === "finished" ? (
          <div>{calculatePoints()}</div>
        ) : null}
      </div>
    </div>
  );
};

export { Game };
