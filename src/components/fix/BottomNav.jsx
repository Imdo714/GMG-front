import React, { useContext } from "react";
import { useNavigate  } from "react-router-dom";
import { AuthContext } from "../../useContext/AuthContext";

const BottomNav = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="bottom-nav">
        <div className="bottom-nav">
          <button onClick={() => navigate("/")} className="nav-btn">홈</button>
          <button onClick={() => navigate("/create")} className="nav-btn">모임 생성</button>
          <button onClick={() => navigate("/review")} className="nav-btn">예약 내역</button>
          <button 
            onClick={() => navigate(isLoggedIn ? "/mypage" : "/login")}
            className="nav-btn"
          >{isLoggedIn ? "마이페이지" : "로그인"}</button>
        </div>
    </div>
  );
}

export default BottomNav;
