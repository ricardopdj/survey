import { useContext } from "react";
import actions from "../../context/Actions";
import { STEPS, StepsContext } from "../../context/StepsContext";
import GendersRadio from "../GendersRadio";

const Details = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { age } = state;

  if (state.currentStep !== STEPS.DETAILS) {
    return null;
  }
  return (
    <div className="step">
      <h3>Details</h3>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <select
          name="age"
          value={age}
          className="form-select"
          onChange={(e) =>
            dispatch({ type: actions.SET_FORM_VALUE, payload: { event: e } })
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
      <GendersRadio />
    </div>
  );
};

export default Details;
