import Sprite, { ISprite } from 'classes/Sprite';

const GreyGroundSprite: ISprite = new Sprite({
  file: 'tile/tiles1.png',
  animations: {
    basic : [
      0, 480, 32, 32,
    ],
  }
});

export default GreyGroundSprite;