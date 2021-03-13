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
  name: "",
  email: "",
  age: "",
  gender: "",
  book: "",
  colors: [],
};

function reducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "nextStep":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "prevStep":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case "setFormValue":
      const fieldName = payload.event.target.name;
      const fieldValue = payload.event.target.value;
      return {
        ...state,
        [fieldName]: fieldValue,
      };
    case "setFormValueColor":
      const colorValue = payload.event.target.value;
      let newColors = [...state.colors, colorValue];
      if (state.colors.includes(colorValue)) {
        newColors = newColors.filter((color) => color !== colorValue);
      }
      return {
        ...state,
        colors: newColors,
      };
    default:
      return state;
  }
}

export const StepsContext = createContext();

export const StepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  );
};
