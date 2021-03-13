import StepsContext from "../../context/StepsContext";
import { useContext } from "react";

const Favorites = () => {
  const c = useContext(StepsContext);
  console.log(c);
  return <div>favorites</div>;
};

export default Favorites;
