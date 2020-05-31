import React from "react";

const WIDTH = 50;
const HEIGHT = 50;

const baseStyle = {
  borderRadius: "50%",
  minWidth: `${WIDTH}px`,
  minHeight: `${HEIGHT}px`,
  border: "1px solid black",
  color: "white",
  fontSize: "20px",
  fontWeight: 800,
  position: "absolute",
};

const calculatePosition = (idx) => {
  const [row, col] = idx;
  return [(row / 2) * WIDTH + WIDTH * col, row * HEIGHT];
};

const Slot = ({ slot, onClick, gameStatus }) => {
  if (gameStatus === "finished" || slot.state !== "unselected") {
    onClick = () => {};
  }
  const { idx, state, number, color, highlight } = slot;

  const [left, top] = calculatePosition(idx);

  const style = {
    ...baseStyle,
    top: `${top}px`,
    left: `${left}px`,
    backgroundColor:
      state === "unselected" && gameStatus === "ongoing"
        ? "white"
        : state === "unselected" && gameStatus === "finished"
        ? "black"
        : color,
    border: `${highlight ? 8 : 1}px solid black`,
  };

  return (
    <button className="slot" style={style} onClick={() => onClick(slot)}>
      {state === "unselected" ? "" : number}
    </button>
  );
};

export { Slot };
