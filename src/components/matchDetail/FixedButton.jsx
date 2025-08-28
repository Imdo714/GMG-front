import React from "react";

const FixedButton = ({ label, onClick }) => {
  return (
    <button
      className="fixed-btn"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FixedButton;
