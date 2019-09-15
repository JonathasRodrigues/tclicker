import Scene, { IScene } from "classes/Scene";
import ScenesType from 'definitions/scenes/types';
import { IMonster } from 'classes/Monster';
import Monsters from '../../monsters';

const creatures: Array <IMonster> = [
  Monsters.Demon
];

const DepotFloor: IScene =  new Scene({
  name: 'DepotCreature',
  type: ScenesType.MOBS,
  fields: creatures
});

export default DepotFloor;
