import reducer from './reducer';
import { CHANGE_BUTTON_COLOR } from './actions';
import React, { createContext, useContext, useReducer } from 'react';

const initialValues = {
  selectedColor: 'red',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const changeButtonColor = () => {
    dispatch({
      type: CHANGE_BUTTON_COLOR,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, changeButtonColor }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialValues };
