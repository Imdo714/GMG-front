import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { meetingDetail } from "../../api/Meeting";
import { requestParticipant } from "../../api/ParticipantApi";
import '../../css/MatchDetail.css'
import FixedButton from "../../components/matchDetail/FixedButton";
import soccerField from "../../assets/react.svg";
import Participant from "./Participant";
import MatchInfoSection from "./MatchInfoSection";

const MatchDetail = () => {
  const { meetingId } = useParams();
  const [matchInfo, setMatchInfo] = useState(null);
  const [reflush, setReflush] = useState(true);

  useEffect(() => {
    const fetchMatchInfo = async () => {
      try{
        const res = await meetingDetail(meetingId);
        const data = res.data.meeting;
        setMatchInfo(data);
      } catch(error){
        console.log(error);
        if (error.response) {
          const data = error.response.data;
          alert(data.message || data.error);
        }
      }
    };

    fetchMatchInfo();
  }, [meetingId]);

  // 모임 신청 함수
  const participantRequest = async () => {
    try{
      const res = await requestParticipant(meetingId);
      alert("신청 완료!");

      setReflush(!reflush);

    } catch(error){
      console.log(error);
      if (error.response) {
        const data = error.response.data;
        alert(data.message || data.error);
      }
    }
  }

  if (!matchInfo) return <div>로딩중...</div>;

  return (
    <div className="container" style={{ paddingBottom: "120px" }}>
      <img src={soccerField} alt="축구장" className="top-image" />

      <div className="content">
        <MatchInfoSection meetingId={meetingId} matchInfo={matchInfo}/>
        <Participant meetingId={meetingId} matchInfo={matchInfo} reflush={reflush} />
      </div>

      <FixedButton label="신청하기" onClick={() => participantRequest()} />
    </div>
  );
};

export default MatchDetail;
