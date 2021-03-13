import StepsContext from "../../context/StepsContext";
import { useContext } from "react";

const Summary = () => {
  const c = useContext(StepsContext);
  console.log(c);
  return <div>Summary</div>;
};

export default Summary;
