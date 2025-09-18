import React from "react";
import { useParams } from 'react-router-dom';
import '../../css/MatchDetail.css'
import FixedButton from "../../components/matchDetail/FixedButton";
import soccerField from "../../assets/react.svg";
import Participant from "./Participant";
import MatchInfoSection from "./MatchInfoSection";

const MatchDetail = () => {
  const { meetingId } = useParams();

  return (
    <div className="container" style={{ paddingBottom: "120px" }}>
      <img src={soccerField} alt="축구장" className="top-image" />

      <div className="content">
        <MatchInfoSection meetingId={meetingId} />
        <Participant meetingId={meetingId} />
      </div>

      <FixedButton label="신청하기" onClick={() => alert("신청 완료!")} />
    </div>
  );
};

export default MatchDetail;
