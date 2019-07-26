import Sprite, { ISprite } from 'classes/Sprite';

const DemonSprite: ISprite = new Sprite({
  file: 'monsters/demon.png',
  animations: {
    stopped : [
      130, 255, 62, 62,
    ],
    walking: [
      130, 255, 62, 62,
      130, 320, 62, 62,
      130, 384, 62, 62,
    ]
  }
});

export default DemonSprite;