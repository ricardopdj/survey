import { PrevButton, NextButton, SubmitButton } from "../Buttons";

const StepContainer = ({ children, onValidateStep }) => {
  return (
    <>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <PrevButton />
        <NextButton onClick={onValidateStep} />
        <SubmitButton />
      </div>
    </>
  );
};

export default StepContainer;
