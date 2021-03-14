import { useContext } from "react";
import actions from "../context/Actions";
import { StepsContext } from "../context/StepsContext";
import { v4 as uuidv4 } from "uuid";

const GendersRadio = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { gender: selectedGender } = state;
  const genderList = ["Woman", "Man", "Transgender", "Prefer not to respond"];

  return (
    <div>
      {genderList.map((gender) => (
        <div className="form-check" key={uuidv4()}>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id={gender}
            value={gender}
            checked={selectedGender === gender}
            onChange={(e) => {
              dispatch({ type: actions.SET_FORM_VALUE, payload: { event: e } });
            }}
          />
          <label className="form-check-label" htmlFor={gender}>
            {gender}
          </label>
        </div>
      ))}
    </div>
  );
};

export default GendersRadio;
