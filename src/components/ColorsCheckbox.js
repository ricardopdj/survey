import { useContext } from "react";
import actions from "../context/Actions";
import { StepsContext } from "../context/StepsContext";
import { v4 as uuidv4 } from "uuid";

const ColorsCheckbox = () => {
  const { state, dispatch } = useContext(StepsContext);
  const { colors } = state;
  const colorList = ["Blue", "Red", "Green", "Orange"];

  const isColorSelected = (color) => {
    return colors.includes(color);
  };
  return (
    <div>
      {colorList.map((color) => (
        <div className="form-check mb-2" key={uuidv4()}>
          <input
            className="form-check-input"
            type="checkbox"
            value={color}
            id={color}
            checked={isColorSelected(color)}
            onChange={(e) =>
              dispatch({
                type: actions.SET_FORM_VALUE_COLOR,
                payload: { event: e },
              })
            }
          />
          <label className="form-check-label" htmlFor={color}>
            {color}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ColorsCheckbox;
