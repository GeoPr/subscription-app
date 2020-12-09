import React from 'react';
import './App.scss';
import { CSSTransition } from 'react-transition-group';
import { Alert } from './Alert/Alert';
import { Images } from './Images/Images';
import { Sounds } from './Sounds/Sounds';
import { Input } from './Input/Input';
import { Duration } from './Duration/Duration';
import { Button } from './Button/Button';
import { Wrapper } from './Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { TApp } from '../redux/reducers/rootReducer';

const App: React.FC = () => {
  const { isVisible } = useSelector((state: TApp) => state.alert);

  return (
    <Wrapper>
      <div className="sc__items">
        <Input />
        <Images />
        <Duration />
        <Sounds />
      </div>
      <Button />
      <CSSTransition in={isVisible} classNames="alert" timeout={1000} unmountOnExit mountOnEnter>
        <Alert />
      </CSSTransition>
    </Wrapper>
  );
};

export default App;
