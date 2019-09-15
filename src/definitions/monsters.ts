import Monster from 'classes/Monster';
import DemonSprite from './sprites/monsters/Demon';

const Monsters = {
  Demon: new Monster({ name: 'Demon', health: 3000, sprite: DemonSprite})
};

export default Monsters;