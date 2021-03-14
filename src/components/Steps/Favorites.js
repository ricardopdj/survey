import { useContext, useState } from "react";
import actions from "../../context/Actions";
import { STEPS, StepsContext } from "../../context/StepsContext";
import { NextButton, PrevButton } from "../Buttons";
import ColorsCheckbox from "../ColorsCheckbox";
import ErrorFeedback from "../ErrorFeedback";

const Favorites = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { book, colors } = state;
  const [errors, setErrors] = useState({
    bookError: false,
    colorsError: false,
  });

  if (state.currentStep !== STEPS.FAVORITES) {
    return null;
  }

  const validateFields = () => {
    if (book && colors.length) {
      dispatch({ type: actions.NEXT_STEP });
    }
    setErrors({ bookError: !book, colorsError: !colors.length });
  };

  return (
    <>
      <div className="modal-body">
        <div className="step">
          <h3>Favorites</h3>
          <div className="mb-3">
            <label htmlFor="book" className="form-label">
              Book
            </label>
            <input
              type="text"
              className="form-control"
              name="book"
              aria-describedby="book"
              value={book}
              onChange={(e) =>
                dispatch({
                  type: actions.SET_FORM_VALUE,
                  payload: { event: e },
                })
              }
            />
            {errors.bookError && (
              <ErrorFeedback message="You must fill this field" />
            )}
          </div>
          <ColorsCheckbox />
          {errors.colorsError && (
            <ErrorFeedback message="You must select at least one option" />
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

export default Favorites;
