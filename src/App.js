import React from "react";
import Survey from "./components/Survey";
import { StepsContextProvider } from "./context/StepsContext";
import "./main.scss";

const App = () => (
  <StepsContextProvider>
    <Survey />
  </StepsContextProvider>
);

export default App;
