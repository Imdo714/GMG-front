import React from "react";

const ReviewItem = ({ id, date, time, title, views, onClick }) => {
    const timeWithoutSeconds = time.slice(0, 5);

  return (
    <div className="match-item" onClick={onClick}>
      <div className="datetime">
        <div className="date">{date}</div>
        <div className="time">{timeWithoutSeconds}</div>
      </div>

      <div className="details">
        <div className="title">
          {title}
        </div>

        <span className="closed-label">마감</span>
      </div>

      <div className="favorite">👁️ {views}</div>
    </div>
  );
};

export default ReviewItem;
