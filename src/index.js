import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function createSurveyContainer() {
  const surveyContainer = document.createElement("div");
  surveyContainer.setAttribute("id", "survey");
  document.body.appendChild(surveyContainer);
}

function init() {
  window.onload = () => {
    createSurveyContainer();
    // setTimeout(() => {
    //   ReactDOM.render(<App title={title} />, document.getElementById("survey"));
    // }, 2000);
    ReactDOM.render(<App />, document.getElementById("survey"));
  };
}

module.hot.accept();
init();
