import Sprite from 'classes/Sprite';
import Tile, { ITile } from 'classes/Tile';

const GreyGroundSprite: ITile = new Tile({
  id: 1,
  name: 'grey-ground',
  sprite: new Sprite({
    file: 'tiles/tiles1.png',
    defaultAnimation: 'basic',
    animations: {
      basic : [
        0, 480, 32, 32,
      ],
    }
  }),
  clickable: false,
  canWalkOver: true
});

export default GreyGroundSprite;