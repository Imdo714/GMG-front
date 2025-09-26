import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { meetingHistoryList } from "../../api/ReviewApi";
import ReviewItem from "./ReviewItem";
import Promotion from "../../components/promotion/Promotion";

const ReviewList = () => {
    const navigate = useNavigate();
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {
        const getHistoryList = async () => {
            try{
                const res = await meetingHistoryList();
                console.log(res.data);
                setMatches(res.data.list);
            } catch(error){
                console.log(error);
                if (error.response) {
                const data = error.response.data;
                alert(data.message || data.error);
                }
            }
        }

        getHistoryList();
    }, []);

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
                    <ReviewItem
                        key={match.meetingId} 
                        id={match.meetingId}
                        date={match.date}
                        time={match.time}
                        title={match.title}
                        views={match.seeCount}
                        onClick={() => navigate(`/review/${match.meetingId}`)}
                    />
                ))}
            </div>

            

        </div>
    )
}

export default ReviewList;