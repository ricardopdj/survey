import StepsContext from "../../context/StepsContext";
import { useContext } from "react";

const Details = () => {
  const c = useContext(StepsContext);
  console.log(c);
  return <div>details</div>;
};

export default Details;
