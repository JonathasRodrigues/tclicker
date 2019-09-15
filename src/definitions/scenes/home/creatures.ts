import Scene, { IScene } from "classes/Scene";
import ScenesType from 'definitions/scenes/types';
import { IMonster } from 'classes/Monster';
import Monsters from '../../monsters';

const creatures: Array <IMonster> = [
  Monsters.Demon
];

const HomeFloor: IScene =  new Scene({
  name: 'HomeCreature',
  type: ScenesType.MOBS,
  fields: creatures
});

export default HomeFloor;
