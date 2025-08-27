import React from "react";
import '../../css/MatchDetail.css'
import MatchHeader from "../../components/match/MatchHeader";
import MatchDescription from "../../components/match/MatchDescription";
import FixedButton from "../../components/match/FixedButton";
import soccerField from "../../assets/react.svg";
import Applicants from "../../components/match/Applicants";

const MatchDetail = () => {
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
          likes={0}
        />

        <MatchDescription
          open={true}
          description={`매치 시작 10분 전 신청이 마감됩니다.\n무더위엔 내 몸 상태를 세심하게 살피고 즐겁게 뛰어요!`}
        />

        <Applicants />
      </div>

      {/* 고정 버튼 */}
      <FixedButton label="신청하기" onClick={() => alert("신청 완료!")} />
    </div>
  );
};

export default MatchDetail;
