import { SurveyState } from "../context/StepsContext";
const SESSION_KEY = "@survey-form";

const Storage = {
  getSurvey: () => {
    const survey = localStorage.getItem(SESSION_KEY);
    return JSON.parse(survey);
  },
  saveSurvey: (surveyData: SurveyState) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(surveyData));
  },
};

export default Storage;
