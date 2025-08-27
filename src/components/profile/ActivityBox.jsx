import ActivityItem from "./ActivityItem";

const ActivityBox = () => {
  const activities = [
    "⚽ 8월 20일 한강 경기 참여 완료!",
    "🤝 8월 15일 즉석 팀 매칭 성공!",
    "🏃 8월 12일 잠실 경기 신청 완료",
    "⚽ 8월 5일 홍대 경기 참여 완료!"
  ];

  return (
    <div className="activity-box card p-4">
      <h3 className="font-bold mb-3">활동 기록</h3>
      <ul className="activity-list space-y-2">
        {activities.map((a, i) => (
          <ActivityItem key={i} text={a} />
        ))}
      </ul>
    </div>
  );
}

export default ActivityBox;