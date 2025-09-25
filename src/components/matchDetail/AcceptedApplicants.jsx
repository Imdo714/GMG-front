import React, { useContext } from "react";
import { AuthContext } from "../../useContext/AuthContext";

const AcceptedApplicants = ({ accepted, personCount, createMemberId, onCancel }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="applicants-box">
      <div className="applicants-header">
        수락 현황 <span className="count">({accepted.length} / {personCount}명)</span>
      </div>

      <div className="applicants-grid">
        {accepted.map((applicant) => (
          <div key={applicant.participantId} className="applicant-card">
            <img src={applicant.avatar} alt={applicant.name} className="avatar" />
            <div className="name">{applicant.name}</div>

            {user?.userId === applicant.userId && user.userId !== createMemberId && (
              <div className="button-group">
                <button
                  className="accept-btn" style={{ background: "#808080" }}
                  onClick={() => onCancel(applicant.participantId)}
                >
                  모임 취소
                </button>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default AcceptedApplicants;