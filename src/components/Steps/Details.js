import { useContext, useState } from "react";
import actions from "../../context/Actions";
import { STEPS, StepsContext } from "../../context/StepsContext";
import { NextButton, PrevButton } from "../Buttons";
import ErrorFeedback from "../ErrorFeedback";
import GendersRadio from "../GendersRadio";

const Details = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { age, gender } = state;
  const [errors, setErrors] = useState({ ageError: false, genderError: false });

  if (state.currentStep !== STEPS.DETAILS) {
    return null;
  }

  const validateFields = () => {
    if (age && gender) {
      dispatch({ type: actions.NEXT_STEP });
    }

    setErrors({ ageError: !age, genderError: !gender });
  };

  return (
    <>
      <div className="modal-body">
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
                dispatch({
                  type: actions.SET_FORM_VALUE,
                  payload: { event: e },
                })
              }
            >
              <option value="">Select your age</option>
              <option value="0-19">0 - 10</option>
              <option value="10-20">10 - 20</option>
              <option value="20-30">20 - 30 </option>
              <option value="30-40">30 - 40 </option>
              <option value="40+">40+</option>
            </select>
            {errors.ageError && (
              <ErrorFeedback message="You must fill this field" />
            )}
          </div>
          <GendersRadio />
          {errors.genderError && (
            <ErrorFeedback message="You must select an option" />
          )}
        </div>
      </div>
      <div className="modal-footer">
        <PrevButton />
        <NextButton onClick={validateFields} />
      </div>
    </>
  );
};

export default Details;
