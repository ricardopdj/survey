import { createContext } from "react";
import React, { useReducer } from "react";
import Storage from "../services/Storage";

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

const storeSurvey = (surveyData) => {
  Storage.saveSurvey(surveyData);
};

function reducer(state, action) {
  const { payload } = action;
  let storedState;
  switch (action.type) {
    case "nextStep":
      storedState = {
        ...state,
        currentStep: state.currentStep + 1,
      };
      storeSurvey(storedState);
      return storedState;
    case "prevStep":
      storedState = {
        ...state,
        currentStep: state.currentStep - 1,
      };
      storeSurvey(storedState);
      return storedState;
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
    case "submit":
      const survey = document.getElementById("survey");
      survey.remove();
      return { ...state, submitted: true };
    default:
      return state;
  }
}

export const StepsContext = createContext();

export const StepContextProvider = ({ children }) => {
  console.log("initial state", initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  );
};
