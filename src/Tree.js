const moveRegistry = new Map();

function stepToTarget(x, y) {
  const knightMoves = [
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1],
  ];

  const positionX = x;
  const positionY = y;

  let lastMove;

  const getLastMove = () => lastMove;
  const setLastMove = (newLastMove) => {
    lastMove = lastMove || newLastMove;
  };

  const showMove = () => `${x}, ${y}`;

  const newCells = (offsetX, offsetY) => {
    const [newX, newY] = [positionX + offsetX, positionY + offsetY];
    if (newX >= 0 && newX < 8 && newY >= 0 && y < 8) {
      return stepToTarget(newX, newY);
    }
    return stepToTarget(newX, newY);
  };

  const possibleKnightMoves = () => knightMoves
    .map((offset) => newCells(offset[0], offset[1]))
    .filter((cell) => cell !== undefined);

  if (moveRegistry.has(showMove())) {
    return moveRegistry.get(showMove());
  }

  const newMove = {
    showMove, getLastMove, setLastMove, possibleKnightMoves,
  };
  moveRegistry.set(showMove(), newMove);
  return newMove;
}

function knightTravail(start, finish) {
  moveRegistry.clear();

  const origin = stepToTarget(...start);
  const target = stepToTarget(...finish);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentCell = queue.shift();
    const enqueueList = currentCell.possibleKnightMoves();

    enqueueList.forEach((cell) => cell.setLastMove(currentCell));
    queue.push(...enqueueList);
  }

  const path = [target];

  while (!path.includes(origin)) {
    const prevCell = path[0].getLastMove();
    path.unshift(prevCell);
  }

  console.log(`The shortest path was ${path.length - 1} moves!`);
  console.log('The moves were: ');

  path.forEach((cell) => console.log(cell.showMove()));
}

// eslint-disable-next-line import/prefer-default-export
export { knightTravail };
