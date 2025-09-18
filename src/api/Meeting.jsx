import apiClient from "./axiosInstance"

// 모임 생성
export const createMeeting = async (formData) => {
  try {
    const response = await apiClient.post('/meeting', formData, {  
      headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 리스트 요청
export const meetingList = async (params) => {
  try {
    const response = await apiClient.get('/meeting', { params });
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 본문 요청
export const meetingDetail = async (meetingId) => {
  try {
    const response = await apiClient.get(`/meeting/${meetingId}`);
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 조회수 증가
export const meetingViews = async (meetingId) => {
  try {
    const response = await apiClient.post(`/meeting/${meetingId}/views`);
    return response.data
  } catch (error) {
    throw error
  }
}

// 모임 창여자 요청
export const meetingParticipant = async (meetingId) => {
  try {
    const response = await apiClient.get(`/meeting/participant/${meetingId}`);
    return response.data
  } catch (error) {
    throw error
  }
}