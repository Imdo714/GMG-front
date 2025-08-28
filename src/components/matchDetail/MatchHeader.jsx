import React from "react";

const MatchHeader = ({ date, title, location, views }) => {
  return (
    <div>
      <div className="detail-date">{date}</div>
      <div className="detail-title">{title}</div>
      <div className="detail-location">{location}</div>
      <div className="detail-stats">
        👁️ {views}
      </div>
    </div>
  );
};

export default MatchHeader;
