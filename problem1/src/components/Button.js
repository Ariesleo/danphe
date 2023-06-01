import React, { memo } from 'react';
import { useAppContext } from '../context/appContext';

const Button = ({ handleClick }) => {
  const { selectedColor } = useAppContext();

  return (
    <div>
      <button
        className="button"
        onClick={handleClick}
        style={{ backgroundColor: selectedColor }}
      >
        click me
      </button>
      <p style={{ color: selectedColor }}>{selectedColor}</p>
    </div>
  );
};

export default memo(Button);
