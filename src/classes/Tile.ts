
import { ISprite } from './Sprite';

export interface ITile {
  id: number;
  name: string;
  sprite: ISprite;
  clickable: boolean;
  canWalkOver: boolean;
}

export default class Tile {
  id: number;
  name: string;
  sprite: ISprite;
  clickable: boolean;
  canWalkOver: boolean;

  constructor(tile: ITile) {
    this.id = tile.id;
    this.name = tile.name;
    this.sprite = tile.sprite;
    this.clickable = tile.clickable;
    this.canWalkOver =tile.canWalkOver;
  }
}