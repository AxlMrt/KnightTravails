import { createBoard } from './gameBoard';
import { createKnight } from './knight';
import { knightTravail } from './Tree';
import Config from './config';

const { x, y } = Config.knight;
createBoard(Config.boardName, Config.size);
createKnight(x, y);
knightTravail([3, 3], [4, 3]);
