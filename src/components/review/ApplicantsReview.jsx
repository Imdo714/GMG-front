import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../useContext/AuthContext";
import { historyMemberList, requestHistoryComment } from "../../api/ReviewApi";
import "../../css/ApplicantsReview.css";

export default function ApplicantsReview({ meetingId }) {
  const { user } = useContext(AuthContext);
  const [applicants, setApplicants] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const reviewMemberList = async () => {
      try{
        const res = await historyMemberList(meetingId);
        console.log(res.data.list);
        setApplicants(res.data.list)
      } catch(error){
        errorMessage(error);
      }
    }

    reviewMemberList();
  }, []);

  const handleCardClick = (memberId) => {
    setOpenId(openId === memberId ? null : memberId);
  };

  const handleReviewSubmit = (memberId) => {
    const reviewText = reviews[memberId];
    if (!reviewText) return; // 빈 리뷰는 무시

    setApplicants((prev) =>
      prev.map((a) =>
        a.memberId === memberId ? { ...a, review: reviewText } : a
      )
    );
    setOpenId(null);

    // 서버에 리뷰 저장 API 호출
    postReview(memberId, reviewText);
  };

  const postReview = async (memberId, reviewText) => {
    try{
      const res = await requestHistoryComment(meetingId, memberId, reviewText);
      console.log(res);

    } catch(error){
      errorMessage(error);
    }
  }

  const errorMessage = (error) =>{
    console.log(error);
    if (error.response) {
      const data = error.response.data;
      alert(data.message || data.error);
    }
  }

  return (
    <div className="">
      <div className="applicants-box">
        <div className="applicants-header">
          리뷰 작성 
        </div>

        <div className="applicants-grid">
          {applicants.map((applicant) => (
            <div
              key={applicant.memberId}
              className="applicant-card"
              onClick={() => handleCardClick(applicant.memberId)}
            >
                <img src={applicant.memberProfile} alt={applicant.memberName} className="avatar" />
                <div className="name">{applicant.memberName}</div>

                {openId === applicant.memberId && 
                  !applicant.review && 
                  applicant.memberId != user.userId && (
                  <div className="review-box" onClick={(e) => e.stopPropagation()}>
                    <textarea
                      className="review-input"
                      placeholder={`${applicant.memberName}님에게 리뷰를 남겨보세요`}
                      value={reviews[applicant.memberId] || ""}
                      onChange={(e) =>
                        setReviews({ ...reviews, [applicant.memberId]: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="review-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReviewSubmit(applicant.memberId);
                      }}
                    >
                      리뷰 등록
                    </button>
                  </div>
                )}
                
                {/* 리뷰 등록 완료 시 */}
                {applicant.review && (
                  <div className="review-done">
                    <strong>작성한 리뷰:</strong> {applicant.review}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
