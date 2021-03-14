import React from "react";
import { closeSurvey } from "../services/Utils";
import { Details, Favorites, Identity, Summary } from "./Steps";

const Survey: React.FC = () => {
  return (
    <div className="modal d-block">
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
