
export interface ISprite {
  file: string;
  animations: string[] | number[];
}

export default class Sprite {
  file: string;
  animations: string[] | number[];
  constructor(sprite: any) {
    this.file = sprite.file;
    this.animations = sprite.animations;
  }
}