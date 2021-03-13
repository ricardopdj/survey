import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { StepContextProvider } from "./context/StepsContext";
import Survey from "./components/Survey";

const App = () => (
  <StepContextProvider>
    <Survey />
  </StepContextProvider>
);

export default App;
