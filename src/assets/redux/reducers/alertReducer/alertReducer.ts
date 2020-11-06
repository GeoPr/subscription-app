import { SHOW_ALERT, HIDE_ALERT } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions';

interface IInitalState {
  isVisible: boolean;
}

const initalState: IInitalState = { isVisible: false };

type ActionsTypes = TActions<typeof actions>;

export const alertReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
  switch (action.type) {
    case SHOW_ALERT: {
      return { ...state, isVisible: true };
    }

    case HIDE_ALERT: {
      return { ...state, isVisible: false };
    }

    default:
      return state;
  }
};
