import { IItem } from './../secondaryInterfaces';
import { CHOOSE_IMAGE } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';
import { chooseItem } from '../secondaryFunctions';

type TInitalState = Array<IItem>;

const initalState: TInitalState = new Array(7).fill('').map((_, idx) => ({
  id: idx,
  title: `images/0${idx + 1}.jpg`,
  isActive: idx === 0 ? true : false,
}));

// initalState[0].isActive = true;

type ActionsTypes = TActions<typeof actions>;

export const imagesReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  switch (action.type) {
    case CHOOSE_IMAGE: {
      const { id } = action.payload;

      return chooseItem(state, id);
    }

    default:
      return state;
  }
};
