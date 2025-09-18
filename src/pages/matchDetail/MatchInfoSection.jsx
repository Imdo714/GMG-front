import { useEffect, useState } from "react";
import { meetingDetail, meetingViews } from "../../api/Meeting";
import MatchHeader from "../../components/matchDetail/MatchHeader";
import MatchDescription from "../../components/matchDetail/MatchDescription";

const MatchInfoSection = ({ meetingId }) => {
  const [matchInfo, setMatchInfo] = useState(null);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchMatchInfo = async () => {
      const res = await meetingDetail(meetingId);
      const data = res.data.meeting;
      console.log(data);
      setMatchInfo(data);
    };

    const fetchViews = async () => {
      const res = await meetingViews(meetingId);
      console.log(res.data.seeCount);
      setViews(res.data.seeCount);
    };

    fetchMatchInfo();
    fetchViews();
  }, [meetingId]);

  if (!matchInfo) return <div>로딩중...</div>;

  return (
    <>
      <MatchHeader
        matchInfo = {matchInfo} views = {views}
      />
      <MatchDescription open={true} />
    </>
  );
};

export default MatchInfoSection;
