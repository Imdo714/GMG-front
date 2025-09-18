import React from "react";

const MatchHeader = ({ matchInfo, views }) => {
  const timeWithoutSeconds = matchInfo.time.slice(0, 5);
  const dateObj = new Date(matchInfo.date); // "2025-09-20"

  const formattedDate = dateObj.toLocaleDateString("ko-KR", {
    month: "long",   // "9월"
    day: "numeric",  // "20일"
    weekday: "long"  // "토요일"
  });

  return (
    <div>
      <div className="detail-date">{formattedDate} {timeWithoutSeconds}</div>
      <div className="detail-title">{matchInfo.title}</div>
      <div className="detail-location">{matchInfo.address} {matchInfo.addressDetail}</div>
      <div className="detail-stats">
        👁️ { views }
      </div>

      <div className="description-box">
        {matchInfo.content}
      </div>
    </div>
  );
};

export default MatchHeader;
