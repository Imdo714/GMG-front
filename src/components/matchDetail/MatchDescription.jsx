import React from "react";

const MatchDescription = ({ open, description }) => {
  return (
    <div className="description-box">
      <div className={`status-inline ${open ? "open" : "closed"}`}>
        {open ? "모집 중" : "마감!"}
      </div>

      {description}
    </div>
  );
};

export default MatchDescription;
