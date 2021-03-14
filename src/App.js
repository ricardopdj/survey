import React from "react";
import Survey from "./components/Survey";
import { StepContextProvider } from "./context/StepsContext";
import "./main.scss";

const App = () => (
  <StepContextProvider>
    <Survey />
  </StepContextProvider>
);

export default App;
