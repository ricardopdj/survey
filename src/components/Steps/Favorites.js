import { useContext } from "react";
import actions from "../../context/Actions";
import { STEPS, StepsContext } from "../../context/StepsContext";
import ColorsCheckbox from "../ColorsCheckbox";

const Favorites = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { book } = state;

  if (state.currentStep !== STEPS.FAVORITES) {
    return null;
  }
  return (
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
            dispatch({ type: actions.SET_FORM_VALUE, payload: { event: e } })
          }
        />
      </div>
      <ColorsCheckbox />
    </div>
  );
};

export default Favorites;
