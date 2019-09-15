
export interface ISprite {
  file: string;
  defaultAnimation: string;
  animations: string[] | number[];
}

export default class Sprite {
  file: string;
  animations: string[] | number[];
  defaultAnimation: string;
  constructor(sprite: any) {
    this.file = sprite.file;
    this.animations = sprite.animations || 'stopped';
    this.defaultAnimation = sprite.defaultAnimation;
  }
}