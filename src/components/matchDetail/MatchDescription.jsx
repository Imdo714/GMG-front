import React, { useContext } from "react";
import { deleteParticipant } from "../../api/ParticipantApi";
import { AuthContext } from "../../useContext/AuthContext";

const MatchDescription = ({ meetingId, matchInfo, acceptedCount, personCount }) => {
  const { user } = useContext(AuthContext);
  const maxPersonCount = acceptedCount >= personCount;

  // 모임 게시물 삭제 
  const deleteMeeting = async () => {
    const confirmReject = window.confirm("모임을 삭제하시겠습니까?");
    if (!confirmReject) return; 

    try{
      const res = await deleteParticipant(meetingId);
      window.location.href = "/";
    } catch(error){
      console.log(error);
      if (error.response) {
        const data = error.response.data;
        alert(data.message || data.error);
      }
    }
  }

  return (
    <div className="description-box">
      <div className={`status-inline ${(matchInfo?.isClosed || maxPersonCount) ? "closed" : "open"}`}>
        {(matchInfo?.isClosed || maxPersonCount) ? "마감!" : "모집 중"}
      </div>

      {user?.userId == matchInfo.createMemberId && (
        <div className="status-inline delete" onClick={() => deleteMeeting()}>
          삭제
        </div>
      )}
    </div>
  );
};

export default MatchDescription;
