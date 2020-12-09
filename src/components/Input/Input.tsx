import React from 'react';
import { useContextValue } from '../../context/ContextProvider';
import './Input.scss';

export const Input: React.FC = () => {
  const { text, setText } = useContextValue();

  const useInput = () => {
    return {
      className: 'sc__input',
      type: 'text',
      autoComplete: 'off',
      name: 'inp',
      value: text,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    };
  };
  const inputProps = useInput();

  return (
    <div className="sc__row">
      <h4 className="sc__title">Follows only</h4>
      <input {...inputProps} />
    </div>
  );
};
