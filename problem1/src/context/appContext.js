import React, { createContext, useContext } from 'react';

const AppContext = createContext();

const initialValues = {
  color: ['red', 'green', 'blue', 'black', 'orange'],
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ ...initialValues }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
