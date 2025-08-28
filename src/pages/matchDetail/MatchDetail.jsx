import React, { useState } from "react";
import '../../css/MatchDetail.css'
import MatchHeader from "../../components/matchDetail/MatchHeader";
import MatchDescription from "../../components/matchDetail/MatchDescription";
import FixedButton from "../../components/matchDetail/FixedButton";
import soccerField from "../../assets/react.svg";
import Applicants from "../../components/matchDetail/Applicants";
import PendingApplicants from "../../components/matchDetail/PendingApplicants";

const MatchDetail = () => {

  const [accepted, setAccepted] = useState([
    { id: 1, name: "홍길동", avatar: "https://i.pravatar.cc/80?img=1" },
  ]);

  const [pending, setPending] = useState([
    { id: 2, name: "김철수", avatar: "https://i.pravatar.cc/80?img=2" },
    { id: 3, name: "이영희", avatar: "https://i.pravatar.cc/80?img=3" },
    { id: 4, name: "박민수", avatar: "https://i.pravatar.cc/80?img=4" },
  ]);

  // 수락 버튼 클릭 시
  const handleAccept = (applicant) => {
    setAccepted([...accepted, applicant]);
    setPending(pending.filter((p) => p.id !== applicant.id));
  };

  // 거절 버튼 클릭 시
  const handleReject = (id) => {
    setPending(pending.filter((p) => p.id !== id));
  };

  return (
    <div className="container" style={ {paddingBottom: '120px'} }>
      {/* 상단 이미지 */}
      <img src={soccerField} alt="축구장" className="top-image" />

      {/* 내용 */}
      <div className="content">
        <MatchHeader
          date="8월 26일 화요일 11:00"
          title="서울 영등포 EA SPORTS FC(더에프필드) B구장"
          location="서울특별시 영등포구 선유로 138"
          views={230}
        />

        <MatchDescription
          open={true}
          description={`매치 시작 10분 전 신청이 마감됩니다.\n무더위엔 내 몸 상태를 세심하게 살피고 즐겁게 뛰어요!`}
        />

        <Applicants accepted={accepted} />
        <PendingApplicants
          pending={pending}
          onAccept={handleAccept}
          onReject={handleReject}
        />
        
      </div>

      {/* 고정 버튼 */}
      <FixedButton label="신청하기" onClick={() => alert("신청 완료!")} />
    </div>
  );
};

export default MatchDetail;
