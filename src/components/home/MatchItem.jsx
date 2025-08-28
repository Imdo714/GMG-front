const MatchItem = ({ id, time, title, mettingCount, userCount, views, isMeeting, onClick }) => {

  return (
    <div className="match-item" onClick={onClick}  > 
        <div className="datetime">
          <div className="date">2025-09-01</div>
          <div className="time">{time}</div>
        </div>

      <div className="details">
        <div className="title">{title}</div>

        {isMeeting ? (
          <div className="subtitle">모집 인원 {mettingCount} / {userCount}</div>
        ) : (
          <span className="closed-label">마감</span>
        )}

      </div>

      <div className="favorite">👁️ {views}</div>
    </div>
  );
}

export default MatchItem;