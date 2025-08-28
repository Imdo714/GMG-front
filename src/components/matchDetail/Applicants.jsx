const Applicants = ({ accepted }) => {
    // return(
    //     <div className="applicants-box">
    //         <div className="applicants-header">
    //         현재 신청 현황 <span className="count">(4 / 10명)</span>
    //         </div>

    //         <div className="applicants-grid">
    //         <div className="applicant-card">
    //             <img src="https://i.pravatar.cc/80?img=1" alt="홍길동" className="avatar" />
    //             <div className="name">홍길동</div>
    //         </div>
    //         <div className="applicant-card">
    //             <img src="https://i.pravatar.cc/80?img=2" alt="김철수" className="avatar" />
    //             <div className="name">김철수</div>
    //         </div>
    //         <div className="applicant-card">
    //             <img src="https://i.pravatar.cc/80?img=3" alt="이영희" className="avatar" />
    //             <div className="name">이영희</div>
    //         </div>
    //         <div className="applicant-card">
    //             <img src="https://i.pravatar.cc/80?img=4" alt="박민수" className="avatar" />
    //             <div className="name">박민수</div>
    //         </div>
    //         </div>
    //     </div>
    // );
      return (
    <div className="applicants-box">
      <div className="applicants-header">
        수락 현황 <span className="count">({accepted.length}명)</span>
      </div>

      <div className="applicants-grid">
        {accepted.map((applicant) => (
          <div key={applicant.id} className="applicant-card">
            <img src={applicant.avatar} alt={applicant.name} className="avatar" />
            <div className="name">{applicant.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applicants;