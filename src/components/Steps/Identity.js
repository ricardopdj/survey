import { StepsContext, STEPS } from "../../context/StepsContext";
import { useContext, useState } from "react";

const Identity = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { name, email } = state;

  if (state.currentStep !== STEPS.IDENTITY) {
    return null;
  }
  return (
    <div className="step">
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
            dispatch({ type: "setFormValue", payload: { event: e } })
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
            dispatch({ type: "setFormValue", payload: { event: e } })
          }
        />
      </div>
    </div>
  );
};

export default Identity;
