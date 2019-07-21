export default class Item {
  id: number;
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  description: string = '';
  image: string = '';
  constructor(item: IItem) {
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
    this.quantity = item.quantity || 0;
    this.description = item.description || '';
    this.image = item.image || '';
  }
}

export interface IItem {
  id: number;
  name: string;
  price: number;
  quantity?: number
  description: string;
  image?: string;
}