import Item from './classes/Item';

import Outfit from './classes/Outfit';

const imagePath = (image: string) => {
  return `/items/${image}.png`;
}

const Miner = new Outfit({ lookType: 69 });
const Explorer = new Outfit({ lookType: 93 });

const items = [
  new Item({ id: 1, name: 'Farmer', price: 10, quantity: 1, description: 'Farmer item teste', image: imagePath('tome') }),
  new Item({ id: 2, name: 'Farmer Pro', price: 50, quantity: 1, description: 'Farmer Pro item teste', image: imagePath('sword') }),
  new Item({ id: 3, name: 'Teste', price: 100, quantity: 1, description: 'Teste item teste', image: imagePath('armor')}),
  new Item({ id: 4, name: 'Teste Pro', price: 1000, quantity: 1, description: 'Teste Pro item teste', image: imagePath('axe') }),
  new Item({ id: 5, name: 'Miner', price: 5, quantity: 1, description: 'Ajuda voce a minerar dinheiro', image: Miner.render() }),
  new Item({ id: 6, name: 'Explorer', price: 5, quantity: 1, description: 'Ajuda voce a explorar novos lugares', image: Explorer.render() }),
];

export default items;