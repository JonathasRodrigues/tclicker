import { combineReducers } from 'redux';
import items from 'definitions/items';
import { IItem } from './classes/Item';
import { IMonster } from './classes/Monster';
import World, { IWorld } from './classes/World';

function MainCount(state: number = 0, action: any) {
  switch(action.type) {
    case 'ADD_COUNT':
      return state + 1;
    case 'REMOVE_COUNT':
      return state - action.quantity;
    default:
      return state;
  }
}

function AvaiableItems(state: IItem[] = items, action: any): Array<IItem> {
  switch(action.type) {
    case 'ADD_NEW_ITEM':
      state.push(action.item);
      return state;
    default:
      return state;
  }
}

function MyItems(state: IItem[] = [], action: any): Array<IItem> {
  switch(action.type) {
    case 'ADD_NEW_MY_ITEM':
      let index = state.findIndex((item:IItem) => item.id === action.item.id);
      if (index !== -1) {
        state[index].quantity += action.item.quantity;
      } else {
        state.push(action.item);
      }
      return state;
    default:
      return state;
  }
}

function Respaw(state: IMonster[] = [], action: any) {
  switch(action.type) {
    case 'ADD_NEW_MONSTER':
      return state;
    case 'REMOVE_MONSTER':
      return state;
    case 'CHANGE_RESPAW':
      return state;
    default:
      return state;
  }
}

function CurrentWorld (state: IWorld = new World(), action: any) {
  return state;
}

const rootReducer = combineReducers({
  World: CurrentWorld, 
  MainCount,
  AvaiableItems,
  MyItems,
  Respaw
});

export default rootReducer;