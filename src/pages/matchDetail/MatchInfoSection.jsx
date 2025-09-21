import { useEffect, useState } from "react";
import { meetingDetail, meetingViews } from "../../api/Meeting";
import MatchHeader from "../../components/matchDetail/MatchHeader";
import MatchDescription from "../../components/matchDetail/MatchDescription";

const MatchInfoSection = ({ meetingId, matchInfo }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      const res = await meetingViews(meetingId);
      console.log(res.data.seeCount);
      setViews(res.data.seeCount);
    };

    // fetchViews(); // 조회수 레디스 떄문에 꺼놓음
  }, [meetingId]);

  if (!matchInfo) return <div>로딩중...</div>;

  return (
    <>
      <MatchHeader matchInfo = {matchInfo} views = {views} />
    </>
  );
};

export default MatchInfoSection;
