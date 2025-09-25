import { useContext } from "react";
import { AuthContext } from "../../useContext/AuthContext";

const PendingApplicants = ({ memberId, pending, onAccept, onReject, onCancel }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="applicants-box">
      <div className="applicants-header">
        신청 대기 현황 <span className="count">({pending.length}명)</span>
      </div>

      <div className="applicants-grid">
        {pending.map((applicant) => (
          <div key={applicant.participantId} className="applicant-card">
            <img src={applicant.avatar} alt={applicant.name} className="avatar" />
            <div className="name">{applicant.name}</div>

            {user?.userId === memberId && (
              <div className="button-group">
                <button
                  className="accept-btn"
                  onClick={() => onAccept(applicant)}
                >
                  수락
                </button>
                <button
                  className="reject-btn"
                  onClick={() => onReject(applicant.participantId)}
                >
                  거절
                </button>
              </div>
            )}

            {user?.userId === applicant.userId && (
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
};

export default PendingApplicants;