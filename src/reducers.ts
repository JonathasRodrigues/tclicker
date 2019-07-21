import { combineReducers } from 'redux';
import items from './DefaultItems';
import { IItem } from './classes/Item';

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

const rootReducer = combineReducers({
  MainCount,
  AvaiableItems,
  MyItems
});

export default rootReducer;