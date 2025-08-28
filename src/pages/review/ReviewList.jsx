import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchItem from "../../components/home/MatchItem";
import Promotion from "../../components/promotion/Promotion";

const ReviewList = () => {
    const navigate = useNavigate();

    const [matches, setMatches] = useState([
        { id: 1, time: "19:00", title: "서울 뚝섬 런닝할 사람", mettingCount: 3, userCount: 10, view:200, isMeeting: true },
        { id: 2, time: "20:30", title: "잠실 풋살 경기", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 3, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 4, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 5, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 6, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10,view:200, isMeeting: false },
        { id: 7, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 8, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 9, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 11, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 12, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 13, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 14, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 15, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
        { id: 16, time: "21:00", title: "한강 밤산책 모임", mettingCount: 3, userCount: 10, view:200, isMeeting: false },
    ]);

    return(
        <div className="container">

            {/* promotion 영역 */}
            <div className="promo-banner">
                <Promotion 
                title={"이번 만남은 어땠나요? 후기를 남겨주세요!"}
                desc={"카드를 누르면 후기를 작성할수 있습니다!"}
                />
            </div>

            <div className="match-list">
                {matches.map((match) => (
                    <MatchItem
                        key={match.id} 
                        id={match.id} 
                        time={match.time}
                        title={match.title}
                        mettingCount={match.mettingCount}
                        userCount={match.userCount}
                        views={match.view}
                        isMeeting={match.isMeeting}
                        onClick={() => navigate(`/review/${match.id}`)}
                    />
                ))}
            </div>

            

        </div>
    )
}

export default ReviewList;