import React from "react";

const MatchDescription = ({ open }) => {
  return (
    <div className="description-box">
      <div className={`status-inline ${open ? "open" : "closed"}`}>
        {open ? "모집 중" : "마감!"}
      </div>
    </div>
  );
};

export default MatchDescription;
