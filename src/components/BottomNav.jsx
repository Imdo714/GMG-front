import { useNavigate  } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className="bottom-nav">
        <div className="bottom-nav">
          <button onClick={() => navigate("/")} className="nav-btn">홈</button>
          <button onClick={() => navigate("/matches")} className="nav-btn">모임 생성</button>
          <button onClick={() => navigate("/reservations")} className="nav-btn">예약 내역</button>
          <button onClick={() => navigate("/mypage")} className="nav-btn">마이페이지</button>
        </div>
    </div>
  );
}

export default BottomNav;
