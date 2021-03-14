import React from "react";

interface Props {
  message: string;
}

const ErrorFeedback: React.FC<Props> = ({ message }) => (
  <div className="invalid-feedback d-block">{message}</div>
);

export default ErrorFeedback;
