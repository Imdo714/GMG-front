import React from "react";

const MatchItem = React.forwardRef(({ id, time, title, personCount, acceptedCount, views, closed, onClick }, ref) => {
  const [datePart, timePart] = time.split("T");
  const timeWithoutSeconds = timePart.slice(0, 5);
  const isClosed = acceptedCount >= personCount;

  return (
    <div className="match-item" onClick={onClick} ref={ref}>
      <div className="datetime">
        <div className="date">{datePart}</div>
        <div className="time">{timeWithoutSeconds}</div>
      </div>

      <div className="details">
        <div className="title">
          {title}
        </div>

        {isClosed || closed ? (
          <span className="closed-label">마감</span>
        ) : (
          <div className="subtitle">
            모집 인원 {acceptedCount} / {personCount}
          </div>
        )}
      </div>

      <div className="favorite">👁️ {views}</div>
    </div>
  );
});

export default MatchItem;
