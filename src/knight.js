/**
 * Function to create knight on board
 * @param {number} x Set the x position
 * @param {number} y Set the y position
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

// eslint-disable-next-line import/prefer-default-export
export { createKnight };
