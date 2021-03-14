import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { STEPS, StepsContext } from "../../context/StepsContext";
import { PrevButton, SubmitButton } from "../Buttons";

const Summary = () => {
  const { state } = useContext(StepsContext);

  if (state.currentStep !== STEPS.SUMMARY) {
    return null;
  }
  return (
    <>
      <div className="modal-body">
        <div className="step summary">
          <h3>Summary</h3>
          <div className="d-flex align-items-center mb-2">
            <div className="label">Name:</div>
            <div className="value">{state.name}</div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="label">Email:</div>
            <div className="value">{state.email}</div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="label">Age:</div>
            <div className="value">{state.age}</div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="label">Gender:</div>
            <div className="value">{state.gender}</div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="label">Favorite Book:</div>
            <div className="value">{state.book}</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="label"> Colors:</div>
            <div>
              {state.colors.map((color) => (
                <span key={uuidv4()} className="me-2" style={{ color: color }}>
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <PrevButton />
        <SubmitButton />
      </div>
    </>
  );
};

export default Summary;
