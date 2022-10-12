import { createBoard, createKnight } from './gameBoard';
import Config from './config';

const { x, y } = Config.knight;
createBoard(Config.boardName, Config.size);
createKnight(x, y);
