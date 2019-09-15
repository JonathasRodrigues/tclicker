import Scene, { IScene } from "classes/Scene";
import ScenesType from 'definitions/scenes/types';
import { ITile } from "classes/Tile";
import Tiles from 'definitions/tiles';

const fields: Array <ITile> = [
  Tiles.RedOrnateChairSprite
];

const DepotScructure: IScene =  new Scene({
  name: 'DepotScructure',
  type: ScenesType.STRUCTURE,
  fields
});

export default DepotScructure;
