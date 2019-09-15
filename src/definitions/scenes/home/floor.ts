import Scene, { IScene } from "classes/Scene";
import ScenesType from 'definitions/scenes/types';
import { ITile } from "classes/Tile";
import Tiles from 'definitions/tiles';

const fields: Array <ITile> = [
  Tiles.GreyGroundSprite
];

const HomeFloor: IScene =  new Scene({
  name: 'HomeFloor',
  type: ScenesType.FLOOR,
  defaultField:  Tiles.GreyGroundSprite,
  fields
});

export default HomeFloor;
