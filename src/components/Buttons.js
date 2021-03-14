import { useContext } from "react";
import actions from "../context/Actions";
import { STEPS, StepsContext } from "../context/StepsContext";

export const PrevButton = () => {
  const { state, dispatch } = useContext(StepsContext);

  if (state.currentStep !== STEPS.IDENTITY) {
    return (
      <button
        type="button"
        className="btn btn-light me-auto"
        onClick={() => dispatch({ type: actions.PREV_STEP })}
      >
        Prev
      </button>
    );
  }
  return null;
};

export const NextButton = ({ onClick }) => {
  const { state } = useContext(StepsContext);
  if (state.currentStep !== STEPS.SUMMARY) {
    return (
      <button type="button" className="btn btn-light" onClick={onClick}>
        Next
      </button>
    );
  }
  return null;
};

export const SubmitButton = () => {
  const { state, dispatch } = useContext(StepsContext);
  if (state.currentStep === STEPS.SUMMARY) {
    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={() => dispatch({ type: actions.SUBMIT })}
      >
        Submit
      </button>
    );
  }
  return null;
};
