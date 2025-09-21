import React from "react";

const MatchDescription = ({ acceptedCount, personCount }) => {
  const isClosed = acceptedCount >= personCount;

  return (
    <div className="description-box">
      <div className={`status-inline ${isClosed ? "closed" : "open"}`}>
        {isClosed ? "마감!" : "모집 중"}
      </div>
    </div>
  );
};

export default MatchDescription;
