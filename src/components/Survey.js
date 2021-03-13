import { useContext } from "react";
import StepsContext, { STEPS } from "../context/StepsContext";
import { Identity, Details, Favorites, Summary } from "./Steps";

const Survey = () => {
  const { state, dispatch } = useContext(StepsContext);
  console.log("survey", state);

  const CurrentStep = () => {
    switch (state.currentStep) {
      case STEPS.IDENTITY:
        return <Identity />;
      case STEPS.DETAILS:
        return <Details />;
      case STEPS.FAVORITES:
        return <Favorites />;
      case STEPS.SUMMARY:
        return <Summary />;
      default:
        return <Identity />;
    }
  };

  const PrevButton = () => {
    if (state.currentStep !== STEPS.IDENTITY) {
      return (
        <button
          type="button"
          className="btn btn-primary"
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
          className="btn btn-primary"
          onClick={() => dispatch({ type: "nextStep" })}
        >
          Next
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
            <CurrentStep />
          </div>
          <div className="modal-footer justify-content-center">
            <PrevButton />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
