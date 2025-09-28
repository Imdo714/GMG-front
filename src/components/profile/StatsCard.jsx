const StatsCard = ({ reviewCount, participantCount }) => {
  return (
    <div className="stats card">
      <div className="stat-item">
        <div className="label">참여 모임 수</div>
        <div className="value">{ participantCount }</div>
      </div>
      <div className="stat-item">
        <div className="label">받은 리뷰 수</div>
        <div className="value">{ reviewCount }</div>
      </div>
    </div>
  );
}

export default StatsCard;