import { useEffect, useState } from "react";
import { meetingDetail, meetingViews } from "../../api/Meeting";
import MatchHeader from "../../components/matchDetail/MatchHeader";
import MatchDescription from "../../components/matchDetail/MatchDescription";

const MatchInfoSection = ({ meetingId, matchInfo }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try{
        const res = await meetingViews(meetingId);
        setViews(res.data.seeCount);
      } catch(error){
        console.log(error);
        if (error.response) {
          const data = error.response.data;
          alert(data.message || data.error);
        }
      }
    };

    fetchViews();
  }, [meetingId]);

  if (!matchInfo) return <div>로딩중...</div>;

  return (
    <>
      <MatchHeader matchInfo = {matchInfo} views = {views} />
    </>
  );
};

export default MatchInfoSection;
