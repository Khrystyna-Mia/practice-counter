import React from 'react';
import { ImPlus } from 'react-icons/im';
import { ImMinus } from 'react-icons/im';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onDecrement}>
      <ImMinus size={30} color="ff0000" className="Counter__icons" />
      <span className="Counter__number">{step}</span>
    </button>

    <button type="button" onClick={onIncrement}>
      <ImPlus size={30} color="ff0000" className="Counter__icons" />
      <span className="Counter__number">{step}</span>
    </button>
  </div>
);

export default Controls;
