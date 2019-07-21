
export interface ICharacter {
  name: string;
  level: number;
  outfit: string;
}

export default class Character {
  name: string = '';
  level: number = 1;
  outfit: string = '';

  constructor(character: ICharacter) {
    this.name = character.name;
    this.level = character.level;
    this.outfit = character.outfit;
  }
}