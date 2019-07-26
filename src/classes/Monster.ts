
import { ISprite } from './Sprite';

export interface IMonster {
  name: string;
  health: number;
  sprite: ISprite;
}

export default class Monster {
  name: string;
  health: number;
  sprite: ISprite;

  constructor(monster: IMonster) {
    this.name = monster.name;
    this.health = monster.health;
    this.sprite = monster.sprite;
  }
}