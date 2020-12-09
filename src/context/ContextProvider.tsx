import React, { createContext, useContext, useState } from 'react';

interface IContextProps {
  text: string;
  setText: (text: string) => void;
  duration: string;
  setDuration: (dur: string) => void;
}

const Context = createContext({} as IContextProps);

export const ContextProvider: React.FC = ({ children }) => {
  const [duration, setDuration] = useState('0');
  const [text, setText] = useState('[name] is following !');

  const value: IContextProps = { duration, setDuration, text, setText };

  return <Context.Provider value={value}> {children} </Context.Provider>;
};

export const useContextValue = () => useContext(Context);
