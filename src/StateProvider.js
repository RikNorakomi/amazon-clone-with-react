import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

// Wraps our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);