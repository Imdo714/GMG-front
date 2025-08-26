
const matches = [
  { time: "19:00", title: "서울 뚝섬 런닝할 사람", subtitle: "모집 인원 5 / 10" },
  { time: "20:30", title: "잠실 풋살 경기", subtitle: "남녀모두 · 5vs5" },
  // API에서 받아온 더 많은 경기들
];

const MatchItem = ({ time, title, subtitle }) => {
  return (
    <div className="match-item">
      <div className="time">{time}</div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="favorite">♡</div>
    </div>
  );
}

export default MatchItem;