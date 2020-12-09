import { IItem } from './../secondaryInterfaces';
import { CHOOSE_SOUND } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';
import { chooseItem } from '../secondaryFunctions';

type TInitalState = Array<IItem>;

const initalState: TInitalState = [
  { id: 0, title: 'fatality.mp3', isActive: true },
  { id: 1, title: 'whyAreYouRunning.mp3', isActive: false },
];

type ActionsTypes = TActions<typeof actions>;

export const soundsReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  switch (action.type) {
    case CHOOSE_SOUND: {
      const { id } = action.payload;

      return chooseItem(state, id);
    }

    default:
      return state;
  }
};
