import React, { createContext, useReducer } from "react";
import Storage from "../services/Storage";
import reducer from "./Reducer";

export interface SurveyState {
  currentStep: STEPS;
  name: string;
  email: string;
  age: string;
  gender: string;
  book: string;
  colors: string[];
  submitted: boolean;
}

export enum STEPS {
  IDENTITY = 0,
  DETAILS = 1,
  FAVORITES = 2,
  SUMMARY = 3,
}

// Set Initial State from session storage or a new one
const initialState: SurveyState = Storage.getSurvey() || {
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
export const StepsContext = createContext<{
  state: SurveyState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

// create Steps Context Provider
export const StepsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  );
};
