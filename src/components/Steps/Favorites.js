import { useContext } from "react";
import { STEPS, StepsContext } from "../../context/StepsContext";

const Favorites = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { book, colors } = state;

  const isColorSelected = (color) => {
    return colors.includes(color);
  };

  if (state.currentStep !== STEPS.FAVORITES) {
    return null;
  }
  return (
    <div className="step">
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
            dispatch({ type: "setFormValue", payload: { event: e } })
          }
        />
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="blue"
            id="flexCheckDefault"
            checked={isColorSelected("blue")}
            onChange={(e) =>
              dispatch({ type: "setFormValueColor", payload: { event: e } })
            }
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Blue
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="red"
            id="flexCheckChecked"
            checked={isColorSelected("red")}
            onChange={(e) =>
              dispatch({ type: "setFormValueColor", payload: { event: e } })
            }
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Red
          </label>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
