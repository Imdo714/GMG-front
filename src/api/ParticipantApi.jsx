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