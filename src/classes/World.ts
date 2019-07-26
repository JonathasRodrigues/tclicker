
export interface ICoordinate {
  x: number;
  y: number;
}

export class Coordinate {
  x: number;
  y: number;

  constructor(coordinate: ICoordinate) {
    this.x = coordinate.x;
    this.y = coordinate.y;
  }
}

export interface IPosition {
  name: string;
  position: ICoordinate;
}

export class Position {
  name: string;
  position: ICoordinate;

  constructor(position: IPosition) {
    this.name = position.name;
    this.position = position.position;
  }
}

export interface IWorld {
  width: number;
  height: number;
  fieldSize: number;

  getPositions(): Array<IPosition>
}


export default class World {
  width: number;
  height: number;
  fieldSize: number

  constructor(world?: IWorld) {
    if (world) {
      this.width = world.width;
      this.height = world.height;
      this.fieldSize = world.fieldSize;
    } else {
      this.width = 640;
      this.height = 480;
      this.fieldSize = 32;
    }
  }

  getPositions(): Array<IPosition> {
    const { width, height, fieldSize } = this;
    const x = width/fieldSize;
    const y = height/fieldSize;
    let fields: Array<IPosition> = [];
    for(let fieldX = 0; fieldX < x; fieldX++){
      for(let fieldY = 0; fieldY < y; fieldY++) {
        fields.push(
          new Position({ 
            name: `${fieldX}.${fieldY}`,
            position: new Coordinate({ x: ((fieldX+1)*fieldSize/2) , y: ((fieldY+1)*fieldSize/2) })
          })
        );
      }
    }
    return fields;
  }
}