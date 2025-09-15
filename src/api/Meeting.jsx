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

// 모임 리스트 불러오기
export const meetingList = async (params) => {
  try {
    const response = await apiClient.get('/meeting', { params });
    return response.data
  } catch (error) {
    throw error
  }
}