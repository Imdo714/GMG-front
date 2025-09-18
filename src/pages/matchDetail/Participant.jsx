import { useEffect, useState } from "react";
import { meetingParticipant } from "../../api/Meeting";
import Applicants from "../../components/matchDetail/Applicants";
import PendingApplicants from "../../components/matchDetail/PendingApplicants";

const Participant = ({ meetingId }) => {
  const [accepted, setAccepted] = useState([
    { id: 1, name: "홍길동", avatar: "https://i.pravatar.cc/80?img=1" },
  ]);

  const [pending, setPending] = useState([
    { id: 2, name: "김철수", avatar: "https://i.pravatar.cc/80?img=2" },
    { id: 3, name: "이영희", avatar: "https://i.pravatar.cc/80?img=3" },
    { id: 4, name: "박민수", avatar: "https://i.pravatar.cc/80?img=4" },
  ]);

//   const [accepted, setAccepted] = useState([]);
//   const [pending, setPending] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       const res = await meetingParticipant(meetingId);
//       setAccepted(res.accepted);
//       setPending(res.pending);
//     };
//     fetchApplicants();
//   }, [meetingId]);

  const handleAccept = (applicant) => {
    setAccepted([...accepted, applicant]);
    setPending(pending.filter((p) => p.id !== applicant.id));
  };

  const handleReject = (id) => {
    setPending(pending.filter((p) => p.id !== id));
  };

  return (
    <>
      <Applicants accepted={accepted} />
      <PendingApplicants
        pending={pending}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </>
  );
};

export default Participant;
