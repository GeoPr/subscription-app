import { showAlert, hideAlert } from './actions';
import { TApp, TActions } from './../rootReducer';
import { ThunkAction } from 'redux-thunk';
import * as actions from './actions';

type ActionsTypes = TActions<typeof actions>;

export const changeAlert = (duration: number): ThunkAction<void, TApp, unknown, ActionsTypes> => {
  return dispatch => {
    dispatch(showAlert());

    setTimeout(() => dispatch(hideAlert()), duration * 1000);
  };
};
