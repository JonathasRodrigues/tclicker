import Sprite from 'classes/Sprite';
import Tile, { ITile } from 'classes/Tile';

const RedOrnateChairSprite: ITile = new Tile({
  id: 1,
  name: 'red-ornate-char',
  sprite: new Sprite({
    file: 'tiles/tiles1.png',
    defaultAnimation: 'basic',
    animations: {
      basic : [
        520, 448, 32, 32,
      ],
    }
  }),
  clickable: false,
  canWalkOver: true
});

export default RedOrnateChairSprite;