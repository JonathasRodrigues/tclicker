import Item from './classes/Item';

const itemPath = (name: string) => {
  return `/items/${name}.png`;
}

const helperPath = (name: string) => {
  return `/helpers/${name}.gif`;
}

const items = [
  new Item({ id: 1, name: 'Farmer', price: 10, quantity: 1, description: 'Farmer item teste', image: itemPath('tome') }),
  new Item({ id: 2, name: 'Farmer Pro', price: 50, quantity: 1, description: 'Farmer Pro item teste', image: itemPath('sword') }),
  new Item({ id: 3, name: 'Teste', price: 100, quantity: 1, description: 'Teste item teste', image: itemPath('armor')}),
  new Item({ id: 4, name: 'Teste Pro', price: 1000, quantity: 1, description: 'Teste Pro item teste', image: itemPath('axe') }),
  new Item({ id: 5, name: 'Miner', price: 5, quantity: 1, description: 'Ajuda voce a minerar dinheiro', image: helperPath('miner') }),
  new Item({ id: 6, name: 'Explorer', price: 5, quantity: 1, description: 'Ajuda voce a explorar novos lugares', image: helperPath('explorer_female') }),
];

export default items;