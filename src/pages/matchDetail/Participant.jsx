import { useEffect, useState } from "react";
import { meetingParticipant, acceptedParticipant, rejectParticipant } from "../../api/ParticipantApi"; 
import AcceptedApplicants from "../../components/matchDetail/AcceptedApplicants";
import PendingApplicants from "../../components/matchDetail/PendingApplicants";
import MatchDescription from "../../components/matchDetail/MatchDescription";

const Participant = ({ meetingId, matchInfo }) => {
  const [accepted, setAccepted] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try{
        const res = await meetingParticipant(meetingId);
        console.log(res.data);
        const { acceptedParticipantList, pendingParticipantList } = res.data;

        setAccepted(
          acceptedParticipantList.map((p) => ({
            participantId: p.participantId,
            userId: p.memberId,
            avatar: p.memberProfile,
            name: p.memberName,
          }))
        );

        setPending(
          pendingParticipantList.map((p) => ({
            participantId: p.participantId,
            userId: p.memberId,
            avatar: p.memberProfile,
            name: p.memberName,
          }))
        );
      } catch (error){
        console.log(error);
      }
    };

    fetchApplicants();
  }, [meetingId]);

  const handleAccept = async (applicant) => {
    try{
      const res = await acceptedParticipant(meetingId, applicant.participantId);
      console.log(res);

      setAccepted([...accepted, applicant]);
      setPending(pending.filter((p) => p.participantId !== applicant.participantId));
    } catch(error){
      console.log(error);
      if (error.response) {
        const data = error.response.data;
        alert(data.message || data.error);
      }
    }
  };

  const handleReject = async (participantId) => {
    try{
      const res = await rejectParticipant(meetingId, participantId);
      console.log(res);

      setPending(pending.filter((p) => p.participantId !== participantId));
    } catch(error){
      console.log(error);
      if (error.response) {
        const data = error.response.data;
        alert(data.message || data.error);
      }
    }
  };

  return (
    <>
      <MatchDescription acceptedCount={accepted.length} personCount={matchInfo.personCount}/>

      <AcceptedApplicants accepted={accepted} personCount={matchInfo.personCount} />
      <PendingApplicants
        memberId={matchInfo.createMemberId}
        pending={pending}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </>
  );
};

export default Participant;
