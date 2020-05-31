import { SLOTSTATE, PLAYER } from "./constants";

const isSameRow = (slotA, slotB) => slotA.idx[0] - slotB.idx[0] === 0;
const isNextToEachOtherOnSameRow = (slotA, slotB) =>
  Math.abs(slotA.idx[1] - slotB.idx[1]) === 1;

const isAdjacentRow = (slotA, slotB) =>
  Math.abs(slotA.idx[0] - slotB.idx[0]) === 1;

const isSameColumn = (slotA, slotB) =>
  Math.abs(slotA.idx[1] - slotB.idx[1]) === 0;

const isPreviousRow = (slotA, slotB) => slotA.idx[0] - slotB.idx[0] === 1;

const isNextRow = (slotA, slotB) => slotA.idx[0] - slotB.idx[0] === -1;

const isPreviousColumn = (slotA, slotB) => slotA.idx[1] - slotB.idx[1] === 1;

const isNextColumn = (slotA, slotB) => slotA.idx[1] - slotB.idx[1] === -1;

const isAdjacent = (slotA, slotB) => {
  const result =
    (isSameRow(slotA, slotB) && isNextToEachOtherOnSameRow(slotA, slotB)) ||
    (isAdjacentRow(slotA, slotB) && isSameColumn(slotA, slotB)) ||
    (isPreviousRow(slotA, slotB) && isNextColumn(slotA, slotB)) ||
    (isNextRow(slotA, slotB) && isPreviousColumn(slotA, slotB));

  return result;
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
      state: SLOTSTATE.UNSELECTED,
      number: null,
      color: null,
      highlight: false,
    });
  }
  return slots;
};

const findAdjacent = (slots, slotA) => {
  const adjacentSlots = slots.filter((slotB) => isAdjacent(slotA, slotB));
  adjacentSlots.forEach((slot) => (slot.highlight = true));
  return adjacentSlots;
};

const calculatePoints = (slots) => {
  const blackHole = slots.filter(
    (slot) => slot.state === SLOTSTATE.UNSELECTED
  )[0];
  const adjacentSlots = findAdjacent(slots, blackHole);
  const redScore = adjacentSlots
    .filter((slot) => slot.color === PLAYER.RED)
    .reduce((acc, curr) => acc + curr.number, 0);
  const blueScore = adjacentSlots
    .filter((slot) => slot.color === PLAYER.BLUE)
    .reduce((acc, curr) => acc + curr.number, 0);
  return {
    blueScore,
    redScore,
  };
};

export { isAdjacent, createSlots, calculatePoints };
