import apiClient from "./axiosInstance"

// 모임 창여자 요청
export const meetingParticipant = async (meetingId) => {
  try {
    const response = await apiClient.get(`/meeting/participant/${meetingId}`);
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 수락 요청
export const acceptedParticipant = async (meetingId, participantId) => {
  try {
    const response = await apiClient.post(`/meeting/participant/${meetingId}/accepted`, { participantId });
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 거절 요청
export const rejectParticipant = async (meetingId, participantId) => {
  try {
    const response = await apiClient.post(`/meeting/participant/${meetingId}/reject`, { participantId });
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 신청 요청
export const requestParticipant = async (meetingId) => {
  try {
    const response = await apiClient.post(`/meeting/participant/${meetingId}`);
    return response.data
  } catch (error) {
    throw error
  }
}

// TODO : post는 2번째 인자가 body여서 위에 처럼 보내도 되지만
// delete는 2번째 인자가 config객체여서 2번째 인자로 보내면 body is missing이 일어나 아래 처럼 body에 담아 보내야 한다.

// 모임 취소 요청
export const cancelParticipant = async (meetingId, participantId) => {
  try {
    const response = await apiClient.delete(`/meeting/participant/${meetingId}/cancel`,
      {
        data: { participantId }
      }
    );
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 신청 요청
export const deleteParticipant = async (meetingId) => {
  try {
    const response = await apiClient.delete(`/meeting/${meetingId}`);
    return response.data
  } catch (error) {
    throw error
  }
}