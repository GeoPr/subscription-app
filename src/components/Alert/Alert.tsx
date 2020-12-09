import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useContextValue } from '../../context/ContextProvider';
import { TApp } from '../../redux/reducers/rootReducer';
import './Alert.scss';

export const Alert: React.FC = () => {
  const images = useSelector((state: TApp) => state.images);
  const sounds = useSelector((state: TApp) => state.sounds);

  const { text } = useContextValue();

  const currentImage = images.find(image => image.isActive);
  const currentSound = sounds.find(sound => sound.isActive);

  const audioEl = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    audioEl.current.play();
    audioEl.current.volume = 0.1;
  }, []);

  return (
    <div className="sc__alert alert-sc">
      <div className="alert-sc__body">
        <div className="alert-sc__img">
          <img src={!currentImage ? 'images/01.jpg' : currentImage.title} alt="img" />
        </div>
        <div className="alert-sc__text">{text}</div>
        <audio
          src={!currentSound ? 'sounds/fatality.mp3' : `sounds/${currentSound.title}`}
          ref={audioEl}
        />
      </div>
    </div>
  );
};
