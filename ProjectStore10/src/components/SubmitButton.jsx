import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";
  return (
    <button type="submit" className="btn btn-primary btn-block">
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">sending...</span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitButton;
