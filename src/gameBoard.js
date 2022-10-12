// eslint-disable-next-line import/prefer-default-export

/** Create a Chess Board
 * and add coordinate value to each cells
 */
function createBoard(boardName, size) {
  const chessBoard = document.getElementById(boardName);
  const chessArray = [];

  for (let i = 0; i < size; i += 1) {
    const cellRow = Math.abs(i - (size - 1));
    for (let j = 0; j < size; j += 1) {
      const cell = document.createElement('div');
      const cellColumn = j;
      cell.classList.add('cell');

      if ((i + j) % 2 === 0) {
        cell.style.background = 'white';
        cell.textContent = cellColumn; // To remove
      } else {
        cell.style.background = 'black';
        cell.textContent = cellRow; // To remove
      }
      chessArray.push(cellRow);
      chessArray.push(cellColumn);
      cell.dataset.chessArray = chessArray;
      chessArray.splice(0, 2);
      chessBoard.appendChild(cell);
    }
  }
}

/** Take coordinate value of board
 * and add a Travail Knight
 */
function createKnight(x, y) {
  const defaultCoordinate = [x, y];
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

export { createBoard, createKnight };
