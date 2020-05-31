/**
 * These tests test the function isAdjacent which is responsible for finding out
 * if two slots are adjacent to each other.
 *
 * Since the problem space is finite and small (21 slots), I have decided to do exhaustive tests.
 * There's one test for each slot and it's matched against every other slot.
 */

import { isAdjacent } from "../utils";

const all = JSON.parse(
  '[{"idx":[0,0]},{"idx":[0,1]},{"idx":[0,2]},{"idx":[0,3]},{"idx":[0,4]},{"idx":[0,5]},{"idx":[1,0]},{"idx":[1,1]},{"idx":[1,2]},{"idx":[1,3]},{"idx":[1,4]},{"idx":[2,0]},{"idx":[2,1]},{"idx":[2,2]},{"idx":[2,3]},{"idx":[3,0]},{"idx":[3,1]},{"idx":[3,2]},{"idx":[4,0]},{"idx":[4,1]},{"idx":[5,0]}]'
);

describe("[0,0]", () => {
  it("should match correctly", () => {
    const empty = { idx: [0, 0] };
    const matches = [{ idx: [0, 1] }, { idx: [1, 0] }];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(matches.length).toEqual(2);
    expect(fails.length).toEqual(19);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[0,1]", () => {
  it("should match correctly", () => {
    const empty = { idx: [0, 1] };
    const matches = [
      { idx: [0, 0] },
      { idx: [0, 2] },
      { idx: [1, 0] },
      { idx: [1, 1] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[0,2]", () => {
  it("should match correctly", () => {
    const empty = { idx: [0, 2] };
    const matches = [
      { idx: [0, 1] },
      { idx: [0, 3] },
      { idx: [1, 2] },
      { idx: [1, 1] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[0,3]", () => {
  it("should match correctly", () => {
    const empty = { idx: [0, 3] };
    const matches = [
      { idx: [0, 2] },
      { idx: [0, 4] },
      { idx: [1, 2] },
      { idx: [1, 3] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[0,4]", () => {
  it("should match correctly", () => {
    const empty = { idx: [0, 4] };
    const matches = [
      { idx: [0, 3] },
      { idx: [0, 5] },
      { idx: [1, 4] },
      { idx: [1, 3] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[0,5]", () => {
  it("should match correctly", () => {
    const empty = { idx: [0, 5] };
    const matches = [{ idx: [0, 4] }, { idx: [1, 4] }];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[1,0]", () => {
  it("should match correctly", () => {
    const empty = { idx: [1, 0] };
    const matches = [
      { idx: [1, 1] },
      { idx: [0, 0] },
      { idx: [0, 1] },
      { idx: [2, 0] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[1,1]", () => {
  it("should match correctly", () => {
    const empty = { idx: [1, 1] };
    const matches = [
      { idx: [1, 0] },
      { idx: [1, 2] },
      { idx: [0, 1] },
      { idx: [0, 2] },
      { idx: [2, 1] },
      { idx: [2, 0] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[1,2]", () => {
  it("should match correctly", () => {
    const empty = { idx: [1, 2] };
    const matches = [
      { idx: [1, 1] },
      { idx: [1, 3] },
      { idx: [0, 2] },
      { idx: [0, 3] },
      { idx: [2, 1] },
      { idx: [2, 2] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[1,3]", () => {
  it("should match correctly", () => {
    const empty = { idx: [1, 3] };
    const matches = [
      { idx: [1, 2] },
      { idx: [1, 4] },
      { idx: [0, 3] },
      { idx: [0, 4] },
      { idx: [2, 2] },
      { idx: [2, 3] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[1,4]", () => {
  it("should match correctly", () => {
    const empty = { idx: [1, 4] };
    const matches = [
      { idx: [1, 3] },
      { idx: [0, 4] },
      { idx: [0, 5] },
      { idx: [2, 3] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[2, 0]", () => {
  it("should match correctly", () => {
    const empty = { idx: [2, 0] };
    const matches = [
      { idx: [2, 1] },
      { idx: [1, 0] },
      { idx: [1, 1] },
      { idx: [3, 0] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[2, 1]", () => {
  it("should match correctly", () => {
    const empty = { idx: [2, 1] };
    const matches = [
      { idx: [2, 0] },
      { idx: [2, 2] },
      { idx: [1, 1] },
      { idx: [1, 2] },
      { idx: [3, 0] },
      { idx: [3, 1] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[2, 2]", () => {
  it("should match correctly", () => {
    const empty = { idx: [2, 2] };
    const matches = [
      { idx: [2, 1] },
      { idx: [2, 3] },
      { idx: [1, 2] },
      { idx: [1, 3] },
      { idx: [3, 1] },
      { idx: [3, 2] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[2, 3]", () => {
  it("should match correctly", () => {
    const empty = { idx: [2, 3] };
    const matches = [
      { idx: [2, 2] },
      { idx: [1, 3] },
      { idx: [1, 4] },
      { idx: [3, 2] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[3, 0]", () => {
  it("should match correctly", () => {
    const empty = { idx: [3, 0] };
    const matches = [
      { idx: [3, 1] },
      { idx: [2, 0] },
      { idx: [2, 1] },
      { idx: [4, 0] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[3, 1]", () => {
  it("should match correctly", () => {
    const empty = { idx: [3, 1] };
    const matches = [
      { idx: [3, 0] },
      { idx: [3, 2] },
      { idx: [2, 1] },
      { idx: [2, 2] },
      { idx: [4, 0] },
      { idx: [4, 1] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[3, 2]", () => {
  it("should match correctly", () => {
    const empty = { idx: [3, 2] };
    const matches = [
      { idx: [3, 1] },
      { idx: [2, 2] },
      { idx: [2, 3] },
      { idx: [4, 1] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[4, 0]", () => {
  it("should match correctly", () => {
    const empty = { idx: [4, 0] };
    const matches = [
      { idx: [4, 1] },
      { idx: [3, 0] },
      { idx: [3, 1] },
      { idx: [5, 0] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[4, 1]", () => {
  it("should match correctly", () => {
    const empty = { idx: [4, 1] };
    const matches = [
      { idx: [4, 0] },
      { idx: [3, 1] },
      { idx: [3, 2] },
      { idx: [5, 0] },
    ];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});

describe("[5, 0]", () => {
  it("should match correctly", () => {
    const empty = { idx: [5, 0] };
    const matches = [{ idx: [4, 0] }, { idx: [4, 1] }];
    const fails = all.filter((slot) => {
      const slotIdx = JSON.stringify(slot.idx);
      for (let i = 0; i < matches.length; i++) {
        if (slotIdx === JSON.stringify(matches[i].idx)) {
          return false;
        }
      }
      return true;
    });

    expect(fails.length).toEqual(21 - matches.length);
    matches.forEach((match) => {
      expect(isAdjacent(empty, match)).toEqual(true);
    });
    fails.forEach((fail) => {
      expect(isAdjacent(empty, fail)).toEqual(false);
    });
  });
});
