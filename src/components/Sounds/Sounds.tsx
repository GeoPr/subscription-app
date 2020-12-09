import React from 'react';
import './Sounds.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TApp } from '../../redux/reducers/rootReducer';
import { chooseSound } from '../../redux/reducers/soundsReducer/actions';

export const Sounds: React.FC = () => {
  const dispatch = useDispatch();
  const sounds = useSelector((state: TApp) => state.sounds);

  const clickHandler = (id: number) => {
    dispatch(chooseSound(id));
  };

  return (
    <div className="sc__row">
      <h4 className="sc__title">Sound</h4>
      <ul className="sc__sounds">
        {sounds.map(sound => {
          return (
            <li
              key={sound.id}
              onClick={() => clickHandler(sound.id)}
              className={sound.isActive ? '_active' : ''}>
              {sound.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
