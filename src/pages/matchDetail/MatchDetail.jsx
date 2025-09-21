import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { meetingDetail } from "../../api/Meeting";
import '../../css/MatchDetail.css'
import FixedButton from "../../components/matchDetail/FixedButton";
import soccerField from "../../assets/react.svg";
import Participant from "./Participant";
import MatchInfoSection from "./MatchInfoSection";

const MatchDetail = () => {
  const { meetingId } = useParams();
  const [matchInfo, setMatchInfo] = useState(null);

  useEffect(() => {
    const fetchMatchInfo = async () => {
      const res = await meetingDetail(meetingId);
      console.log(res);
      const data = res.data.meeting;
      setMatchInfo(data);
    };

    fetchMatchInfo();
  }, [meetingId]);

  if (!matchInfo) return <div>로딩중...</div>;

  return (
    <div className="container" style={{ paddingBottom: "120px" }}>
      <img src={soccerField} alt="축구장" className="top-image" />

      <div className="content">
        <MatchInfoSection meetingId={meetingId} matchInfo={matchInfo}/>
        <Participant meetingId={meetingId} matchInfo={matchInfo} />
      </div>

      <FixedButton label="신청하기" onClick={() => alert("신청 완료!")} />
    </div>
  );
};

export default MatchDetail;
