import Sprite from 'classes/Sprite';
import Tile, { ITile } from 'classes/Tile';

const WoodGroundSprite: ITile = new Tile({
  id: 1,
  name: 'wood-ground',
  sprite: new Sprite({
    file: 'tiles/tiles1.png',
    defaultAnimation: 'basic',
    animations: {
      basic : [
        194, 640, 32, 32,
      ],
    }
  }),
  clickable: false,
  canWalkOver: true
});

export default WoodGroundSprite;