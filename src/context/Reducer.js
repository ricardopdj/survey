import { closeSurvey } from "../services/Utils";
import actions from "./Actions";
import Storage from "../services/Storage";

export default function reducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case actions.NEXT_STEP:
      const nextStepState = {
        ...state,
        currentStep: state.currentStep + 1,
      };
      Storage.saveSurvey(nextStepState);
      return nextStepState;
    case actions.PREV_STEP:
      let prevStepState = {
        ...state,
        currentStep: state.currentStep - 1,
      };
      Storage.saveSurvey(prevStepState);
      return prevStepState;
    case actions.SET_FORM_VALUE:
      const fieldName = payload.event.target.name;
      const fieldValue = payload.event.target.value;
      return {
        ...state,
        [fieldName]: fieldValue,
      };
    case actions.SET_FORM_VALUE_COLOR:
      const colorValue = payload.event.target.value;
      let newColors = [...state.colors, colorValue];
      if (state.colors.includes(colorValue)) {
        newColors = newColors.filter((color) => color !== colorValue);
      }
      return {
        ...state,
        colors: newColors,
      };
    case actions.SUBMIT:
      const submitState = { ...state, submitted: true };
      Storage.saveSurvey(submitState);
      closeSurvey();
      return submitState;
    default:
      return state;
  }
}
