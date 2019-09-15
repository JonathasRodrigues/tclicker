
export interface IScene {
  name: string;
  type: number;
  fields: Array<any>;
  defaultField?: any;
}

export default class Scene {
  name: string;
  type: number;
  fields: Array<any>;
  defaultField?: any;

  constructor(scene: IScene) {
    this.name = scene.name;
    this.type = scene.type;
    this.fields = scene.fields;
    this.defaultField = scene.defaultField;
  }
}