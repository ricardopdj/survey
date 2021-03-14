import { closeSurvey } from "../services/Utils";
import { NextButton, PrevButton, SubmitButton } from "./Buttons";
import { Details, Favorites, Identity, Summary } from "./Steps";

const Survey = () => {
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
          <div className="modal-body">
            <Identity />
            <Details />
            <Favorites />
            <Summary />
          </div>
          <div className="modal-footer">
            <PrevButton />
            <NextButton />
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
