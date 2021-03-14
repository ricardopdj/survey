import React from "react";
import { useContext } from "react";
import actions from "../../context/Actions";
import { STEPS, StepsContext } from "../../context/StepsContext";
import StepContainer from "./StepContainer";

const Identity: React.FC = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { name, email } = state;

  if (state.currentStep !== STEPS.IDENTITY) {
    return null;
  }

  const validateStep = () => {
    dispatch({ type: actions.NEXT_STEP });
  };

  return (
    <StepContainer onValidateStep={validateStep}>
      <div className="step">
        <h3>Identity</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            aria-describedby="name"
            value={name}
            onChange={(e) =>
              dispatch({
                type: actions.SET_FORM_VALUE,
                payload: { event: e },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            name="email"
            value={email}
            onChange={(e) =>
              dispatch({
                type: actions.SET_FORM_VALUE,
                payload: { event: e },
              })
            }
          />
        </div>
      </div>
    </StepContainer>
  );
};

export default Identity;
