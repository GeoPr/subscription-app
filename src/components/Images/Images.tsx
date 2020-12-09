import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseImage } from '../../redux/reducers/imagesReducer/actions';
import { TApp } from '../../redux/reducers/rootReducer';
import './Images.scss';

export const Images: React.FC = () => {
  const dispatch = useDispatch();
  const images = useSelector((state: TApp) => state.images);

  const clickHandler = (id: number) => {
    dispatch(chooseImage(id));
  };

  return (
    <div className="sc__row">
      <h4 className="sc__title">Image</h4>
      <div className="sc__images">
        {images.map(image => {
          return (
            <div
              className={`sc__img ${image.isActive ? '_active' : ''}`}
              key={image.id}
              onClick={() => clickHandler(image.id)}>
              <img src={image.title} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
