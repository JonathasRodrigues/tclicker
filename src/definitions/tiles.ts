import Tile, { ITile } from 'classes/Tile';
import GreyGroundSprite from './sprites/tiles/GreyGround';

const tiles: ITile[] = [
  new Tile({ id: 1, name: 'grey ground', sprite: GreyGroundSprite, clickable: false , canWalkOver: true })
];

export default tiles;