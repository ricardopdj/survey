import React, { createContext, useReducer } from "react";
import Storage from "../services/Storage";
import reducer from "./Reducer";

export const STEPS = {
  IDENTITY: 0,
  DETAILS: 1,
  FAVORITES: 2,
  SUMMARY: 3,
};

// Set Initial State from session storage or a new one
const initialState = Storage.getSurvey() || {
  currentStep: STEPS.IDENTITY,
  name: "",
  email: "",
  age: "",
  gender: "",
  book: "",
  colors: [],
  submitted: false,
};

// create Steps Context
export const StepsContext = createContext();

// create Steps Context Provider
export const StepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  );
};
