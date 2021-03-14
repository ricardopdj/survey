import React from "react";
import { PrevButton, NextButton, SubmitButton } from "../Buttons";

interface Props {
  children: JSX.Element;
  onValidateStep?: () => void;
}
const StepContainer: React.FC<Props> = ({ children, onValidateStep }) => {
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
