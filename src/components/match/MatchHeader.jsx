import React from "react";

const MatchHeader = ({ date, title, location, views, likes }) => {
  return (
    <div>
      <div className="date">{date}</div>
      <div className="title">{title}</div>
      <div className="location">{location}</div>
      <div className="stats">
        👁️ {views} &nbsp; ❤️ {likes}
      </div>
    </div>
  );
};

export default MatchHeader;
