import React, { useState } from "react";
import "../../css/ApplicantsReview.css";

export default function ApplicantsReview() {
  const initialApplicants = [
    { id: 1, name: "홍길동", avatar: "https://i.pravatar.cc/80?img=1", reviewed: false },
    { id: 2, name: "김철수", avatar: "https://i.pravatar.cc/80?img=2", reviewed: false },
    { id: 3, name: "이영희", avatar: "https://i.pravatar.cc/80?img=3", reviewed: false },
    { id: 4, name: "박민수", avatar: "https://i.pravatar.cc/80?img=4", reviewed: false },
  ];

  const [applicants, setApplicants] = useState(initialApplicants);
  const [openId, setOpenId] = useState(null);
  const [reviews, setReviews] = useState({});

  const handleCardClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleReviewSubmit = (id) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, reviewed: true } : a))
    );
    setOpenId(null);
  };

  return (
    <div className="">
      <div className="applicants-box">
        <div className="applicants-header">
          리뷰 작성 
        </div>

        <div className="applicants-grid">
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="applicant-card"
              onClick={() => handleCardClick(applicant.id)}
            >
                <img src={applicant.avatar} alt={applicant.name} className="avatar" />
                <div className="name">{applicant.name}</div>

                {openId === applicant.id && !applicant.reviewed && (
                    <div
                        className="review-box"
                        onClick={(e) => e.stopPropagation()}   // 내부 클릭 시 부모 클릭 막기
                    >
                        <textarea
                        className="review-input"
                        placeholder={`${applicant.name}님에게 리뷰를 남겨보세요`}
                        value={reviews[applicant.id] || ""}
                        onChange={(e) =>
                            setReviews({ ...reviews, [applicant.id]: e.target.value })
                        }
                        />
                        <button
                        type="button"
                        className="review-btn"
                        onClick={(e) => {
                            e.stopPropagation();              // 버튼 클릭 시도 부모 onClick 막기
                            handleReviewSubmit(applicant.id);
                        }}
                        >
                        리뷰 등록
                        </button>
                    </div>
                )}

                {applicant.reviewed && (
                <div className="review-done">리뷰 완료 ✅</div>
                )}
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
