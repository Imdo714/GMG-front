import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { meetingDetail } from '../../api/Meeting';
import MatchHeader from "../../components/matchDetail/MatchHeader";
import ApplicantsReview from "../../components/review/ApplicantsReview";
import soccerField from "../../assets/react.svg";
import Promotion from "../../components/promotion/Promotion";

const ReviewDetail = () => {
    // 모임이 끝난 모임정보를 보여주고 카드를 눌러 그 사람의 후기를 남겨주는 페이지
    const { meetingId } = useParams();
    const [matchInfo, setMatchInfo] = useState(null);

      useEffect(() => {
        const fetchMatchInfo = async () => {
          try{
            const res = await meetingDetail(meetingId);
            const { meeting, closed } = res.data;
            setMatchInfo({ ...meeting, isClosed: closed });
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
    
    if (!matchInfo) return <div>로딩중...</div>;

    return (
        <div className="container">

            <img src={soccerField} alt="축구장" className="top-image" />

            <div className="content">
                <MatchHeader
                  matchInfo={matchInfo}
                />

                {/* promotion 영역 */}
                <div className="promo-banner">
                    <Promotion 
                    title={"이번 만남은 어땠나요? 후기를 남겨주세요!"}
                    desc={"카드를 누르면 후기를 작성할수 있습니다!"}
                    />
                </div>

                {/* 리뷰 작성 영역 */}
                <ApplicantsReview 
                    meetingId={meetingId}
                />
            </div>

        </div>
    )
}

export default ReviewDetail;