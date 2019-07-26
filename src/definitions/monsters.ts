import Monster, { IMonster } from 'classes/Monster';
import DemonSprite from './sprites/monsters/Demon';

const monsters: IMonster[] = [
  new Monster({ name: 'Demon', health: 3000, sprite: DemonSprite})
];

export default monsters;