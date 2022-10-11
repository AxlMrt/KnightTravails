// eslint-disable-next-line import/prefer-default-export
export function createBoard() {
  const chessBoard = document.getElementById('board');
  const chessArray = [];

  // eslint-disable-next-line no-empty, no-plusplus
  for (let i = 0; i < 8; i++) {
    const cellRow = Math.abs(i - 7);
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement('div');
      const cellColumn = j;
      cell.classList.add('cell');

      if ((i + j) % 2 === 0) {
        cell.textContent = cellColumn; // To remove
        chessArray.push(cellRow);
        chessArray.push(cellColumn);
        cell.dataset.chessArray = chessArray;
        chessArray.splice(0, 2);
      } else {
        cell.style.background = 'black';
        cell.textContent = cellRow; // To remove
        chessArray.push(cellRow);
        chessArray.push(cellColumn);
        cell.dataset.chessArray = chessArray;
        chessArray.splice(0, 2);
      }

      chessBoard.appendChild(cell);
    }
  }
}

export function createKnight() {
  const defaultCoordinate = [0, 0];
  const cellNodes = document.querySelectorAll('.cell');

  cellNodes.forEach((node) => {
    if (defaultCoordinate.toString() === node.dataset.chessArray) {
      const knight = document.createElement('img');
      knight.classList.add('knight');
      knight.src = './TravailKnight.png';
      node.appendChild(knight);
    }
  });
}
