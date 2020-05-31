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

export { isAdjacent };
