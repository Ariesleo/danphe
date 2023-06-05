import React, { memo } from 'react';
import { useAppContext } from '../context/appContext';

const Button = ({ handleClick }) => {
  const { selectedColor, colorsCombo } = useAppContext();

  console.log(colorsCombo);

  return (
    <div>
      <button
        className="button"
        onClick={handleClick}
        style={{ backgroundColor: selectedColor }}
      >
        click me
      </button>
      <br />
      {colorsCombo &&
        colorsCombo.map((color, key) => {
          return (
            <span key={key} style={{ color: color }}>
              {color},{' '}
            </span>
          );
        })}
    </div>
  );
};

export default memo(Button);
