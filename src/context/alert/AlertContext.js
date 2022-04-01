import React, { createContext, useContext, useReducer } from 'react';
const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);
  const sendAlert = ({ msg, type }) => {
    dispatch({ type: 'SHOW_ALERT', payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, sendAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
