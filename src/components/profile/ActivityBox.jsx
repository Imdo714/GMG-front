import ReviewItem from "./ReviewItem";

const ActivityBox = ({ activities }) => {

  if (!activities) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="activity-box card p-4">
      <h3 className="font-bold mb-3">활동 기록</h3>
      <ul className="activity-list space-y-2">
        {activities.map(a => (
          <ReviewItem key={a.meetingId} text={a.title} />
        ))}
      </ul>
    </div>
  );
}

export default ActivityBox;