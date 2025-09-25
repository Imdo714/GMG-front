import { useEffect, useState } from "react";
import { meetingParticipant, acceptedParticipant, rejectParticipant, cancelParticipant } from "../../api/ParticipantApi"; 
import AcceptedApplicants from "../../components/matchDetail/AcceptedApplicants";
import PendingApplicants from "../../components/matchDetail/PendingApplicants";
import MatchDescription from "../../components/matchDetail/MatchDescription";

const Participant = ({ meetingId, matchInfo, reflush }) => {
  const [accepted, setAccepted] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try{
        const res = await meetingParticipant(meetingId);
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
        errorMessage(error);
      }
    };

    fetchApplicants();
  }, [meetingId, reflush]);

  // 신청 수락 함수 
  const handleAccept = async (applicant) => {
    const confirmReject = window.confirm("참가를 수락하시겠습니까?");
    if (!confirmReject) return; 

    try{
      const res = await acceptedParticipant(meetingId, applicant.participantId);

      setAccepted([...accepted, applicant]);
      setPending(pending.filter((p) => p.participantId !== applicant.participantId));
    } catch(error){
      errorMessage(error);
    }
  };

  // 신청 취소 함수 증복 제거 
  const handleParticipantAction = async (participantId, actionType) => {
    const messages = {
      reject: "정말로 참가자를 거절하시겠습니까?",
      cancel: "정말로 참가를 취소하시겠습니까?",
    };

    const apis = {
      reject: rejectParticipant,
      cancel: cancelParticipant,
    };

    const confirmAction = window.confirm(messages[actionType]);
    if (!confirmAction) return;

    try {
      const res = await apis[actionType](meetingId, participantId);

      setPending((prev) => prev.filter((p) => p.participantId !== participantId));
    } catch (error) {
      errorMessage(error);
    }
  };

  // 신청 거절 함수
  const handleReject = async (participantId) => {
    handleParticipantAction(participantId, "reject");
  };

  // 모임 취소 함수
  const handelCancel = async (participantId) => {
    handleParticipantAction(participantId, "cancel");
  }

  // 에러 메시지 응답
  const errorMessage = (error) => {
    console.log(error);
    if (error.response) {
      const data = error.response.data;
      alert(data.message || data.error);
    }
  }

  return (
    <>
      <MatchDescription 
      meetingId={meetingId}
      memberId={matchInfo.createMemberId}
      acceptedCount={accepted.length} 
      personCount={matchInfo.personCount}
      />

      <AcceptedApplicants 
        accepted={accepted} 
        personCount={matchInfo.personCount} 
        createMemberId={matchInfo.createMemberId} 
        onCancel={handelCancel} 
      />

      <PendingApplicants
        memberId={matchInfo.createMemberId}
        pending={pending}
        onAccept={handleAccept}
        onReject={handleReject}
        onCancel={handelCancel}
      />
    </>
  );
};

export default Participant;
