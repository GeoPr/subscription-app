import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContextValue } from '../../context/ContextProvider';
import { changeAlert } from '../../redux/reducers/alertReducer/asyncActions';
import { TApp } from '../../redux/reducers/rootReducer';
import './Button.scss';

export const Button: React.FC = () => {
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state: TApp) => state.alert);
  const { duration } = useContextValue();

  const showAlert = () => {
    if (+duration !== 0) {
      dispatch(changeAlert(+duration));
    } else prompt('the duration cannot be empty', 'i got it');
  };

  return (
    <button className="sc__button" onClick={showAlert} disabled={isVisible}>
      Test Alert
    </button>
  );
};
