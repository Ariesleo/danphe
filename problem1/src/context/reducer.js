import { CHANGE_BUTTON_COLOR } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_COLOR:
      const colors = ['red', 'green', 'blue', 'black', 'orange'];
      const randomIndex = Math.floor(Math.random() * colors.length);

      return {
        ...state,
        selectedColor:
          state.selectedColor === 'blue' ? 'green' : colors[randomIndex],
        colorsCombo: [...state.colorsCombo, state.selectedColor],
      };

    default:
      return { ...state };
  }
};

export default reducer;
