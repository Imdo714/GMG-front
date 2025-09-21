const AcceptedApplicants = ({ accepted, personCount }) => {
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcceptedApplicants;