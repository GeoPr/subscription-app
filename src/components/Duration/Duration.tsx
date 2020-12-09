import React from 'react';
import { useContextValue } from '../../context/ContextProvider';
import './Duration.scss';

export const Duration: React.FC = () => {
  const { duration, setDuration } = useContextValue();

  const useInput = () => {
    return {
      className: 'sc__range',
      type: 'range',
      min: '0',
      max: '20',
      value: duration,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDuration(e.target.value),
    };
  };
  const inputProps = useInput();

  return (
    <div className="sc__row">
      <h4 className="sc__title">Alert duration</h4>
      <div className="sc__duration">
        <span>{duration}s</span>
        <input {...inputProps} />
      </div>
    </div>
  );
};
