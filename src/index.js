import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Storage from "./services/Storage";

// Check if survey should open based on submission
function shouldOpenSurvey() {
  const { submitted } = Storage.getSurvey() || false;
  return !submitted;
}

function createSurveyContainer() {
  const surveyContainer = document.createElement("div");
  surveyContainer.setAttribute("id", "survey");
  document.body.appendChild(surveyContainer);
}

function init() {
  if (shouldOpenSurvey()) {
    window.onload = () => {
      createSurveyContainer();
      setTimeout(() => {
        ReactDOM.render(<App />, document.getElementById("survey"));
      }, 2000);
    };
  }
}

module.hot.accept();
init();
