const PendingApplicants = ({ pending, onAccept, onReject }) => {
  return (
    <div className="applicants-box">
      <div className="applicants-header">
        신청 대기 현황 <span className="count">({pending.length}명)</span>
      </div>

      <div className="applicants-grid">
        {pending.map((applicant) => (
          <div key={applicant.id} className="applicant-card">
            <img src={applicant.avatar} alt={applicant.name} className="avatar" />
            <div className="name">{applicant.name}</div>
            <div className="button-group">
                <button
                    className="accept-btn"
                    onClick={() => onAccept(applicant)}
                >
                    수락
                </button>
                <button
                    className="reject-btn"
                    onClick={() => onReject(applicant.id)}
                >
                    거절
                </button>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingApplicants;