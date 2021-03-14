import { useContext } from "react";
import { STEPS, StepsContext } from "../../context/StepsContext";

const Summary = () => {
  const { state, dispatch } = useContext(StepsContext);

  if (state.currentStep !== STEPS.SUMMARY) {
    return null;
  }
  return (
    <div className="step">
      <h1>Summary</h1>
      <div>Name: {state.name}</div>
      <div>Email: {state.email}</div>
      <div>Age: {state.age}</div>
      <div>Gender: {state.gender}</div>
      <div>Favorite Book: {state.book}</div>
      <div>
        Colors:
        {state.colors.map((color, index) => (
          <span key={index} className="mx-2">
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Summary;
