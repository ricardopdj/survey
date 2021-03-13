import { useContext } from "react";
import { StepsContext, STEPS } from "../context/StepsContext";
import { Identity, Details, Favorites, Summary } from "./Steps";
import "../main.scss";

const Survey = () => {
  const { state, dispatch } = useContext(StepsContext);
  console.log(state);

  const PrevButton = () => {
    if (state.currentStep !== STEPS.IDENTITY) {
      return (
        <button
          type="button"
          className="btn btn-light me-auto"
          onClick={() => dispatch({ type: "prevStep" })}
        >
          Prev
        </button>
      );
    }
    return null;
  };

  const NextButton = () => {
    if (state.currentStep !== STEPS.SUMMARY) {
      return (
        <button
          type="button"
          className="btn btn-light"
          onClick={() => dispatch({ type: "nextStep" })}
        >
          Next
        </button>
      );
    }
    return null;
  };

  const SubmitButton = () => {
    if (state.currentStep === STEPS.SUMMARY) {
      return (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch({ type: "submit" })}
        >
          Submit
        </button>
      );
    }
    return null;
  };

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Survey</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <Identity />
            <Details />
            <Favorites />
            <Summary />
          </div>
          <div className="modal-footer">
            <PrevButton />
            <NextButton />
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
