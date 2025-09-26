import apiClient from "./axiosInstance"

// 참가했었던 모임 기록 리스트 
export const meetingHistoryList = async () => {
  try {
    const response = await apiClient.post(`/meeting/history`);
    return response.data
  } catch (error) {
    throw error
  }
}

// 참가했언더 회원 기록 리스트 
export const historyMemberList = async (meetingId) => {
  try {
    const response = await apiClient.get(`/meeting/history/particitpant/${meetingId}`);
    return response.data
  } catch (error) {
    throw error
  }
}

// 참가했언더 회원 기록 리스트 
export const requestHistoryComment = async (meetingId, memberId, reviewText) => {
  try {
    const response = await apiClient.post(`/meeting/review/${meetingId}/${memberId}`, { comment : reviewText });
    return response.data
  } catch (error) {
    throw error
  }
}