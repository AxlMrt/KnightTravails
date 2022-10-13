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

// eslint-disable-next-line import/prefer-default-export
export { createBoard };
