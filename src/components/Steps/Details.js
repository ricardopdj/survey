import { StepsContext, STEPS } from "../../context/StepsContext";
import { useContext, useState } from "react";

const Details = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { age, gender } = state;

  if (state.currentStep !== STEPS.DETAILS) {
    return null;
  }
  return (
    <div className="step">
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <select
          name="age"
          value={age}
          className="form-select"
          onChange={(e) =>
            dispatch({ type: "setFormValue", payload: { event: e } })
          }
        >
          <option>Select your age</option>
          <option value="0-19">0 - 10</option>
          <option value="10-20">10 - 20</option>
          <option value="20-30">20 - 30 </option>
          <option value="30-40">30 - 40 </option>
          <option value="40+">40+</option>
        </select>
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="woman"
            value="woman"
            checked={gender === "woman"}
            onChange={(e) => {
              dispatch({ type: "setFormValue", payload: { event: e } });
            }}
          />
          <label className="form-check-label" htmlFor="woman">
            Woman
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="man"
            value="man"
            checked={gender === "man"}
            onChange={(e) =>
              dispatch({ type: "setFormValue", payload: { event: e } })
            }
          />
          <label className="form-check-label" htmlFor="man">
            Man
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="trans"
            value="trans"
            checked={gender === "trans"}
            onChange={(e) =>
              dispatch({ type: "setFormValue", payload: { event: e } })
            }
          />
          <label className="form-check-label" htmlFor="trans">
            Transgender
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="undefined"
            value="undefined"
            checked={gender === "undefined"}
            onChange={(e) =>
              dispatch({ type: "setFormValue", payload: { event: e } })
            }
          />
          <label className="form-check-label" htmlFor="undefined">
            Prefer not to respond.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Details;
