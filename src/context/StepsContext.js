import { createContext } from "react";
import React, { useReducer } from "react";

export const STEPS = {
  IDENTITY: 0,
  DETAILS: 1,
  FAVORITES: 2,
  SUMMARY: 3,
};

export const initialState = {
  currentStep: STEPS.IDENTITY,
};

const StepsContext = createContext({});

function reducer(state, action) {
  const { payload } = action;
  console.log(state, action);
  switch (action.type) {
    case "nextStep":
      console.log("veio aqui", state.currentStep);
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "prevStep":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    default:
      return state;
  }
}

export const StepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  );
};
export default StepsContext;
