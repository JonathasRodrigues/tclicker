import Scene, { IScene } from "classes/Scene";
import ScenesType from 'definitions/scenes/types';
import { ITile } from "classes/Tile";
import Tiles from 'definitions/tiles';

const fields: Array <ITile> = [
  Tiles.WoodGroundSprite
];

const DepotFloor: IScene =  new Scene({
  name: 'DepotFloor',
  type: ScenesType.FLOOR,
  defaultField:  Tiles.WoodGroundSprite,
  fields
});

export default DepotFloor;
