import StepsContext from "../../context/StepsContext";
import { useContext } from "react";

const Identity = () => {
  const c = useContext(StepsContext);
  return <div>step Identity</div>;
};

export default Identity;
