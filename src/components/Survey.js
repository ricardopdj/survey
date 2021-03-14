import { useContext } from "react";
import { StepsContext } from "../context/StepsContext";
import { closeSurvey } from "../services/Utils";
import { Details, Favorites, Identity, Summary } from "./Steps";

const Survey = () => {
  const { state } = useContext(StepsContext);
  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Survey</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeSurvey()}
            />
          </div>
          <Identity />
          <Details />
          <Favorites />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Survey;
