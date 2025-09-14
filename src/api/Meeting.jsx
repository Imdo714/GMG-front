import apiClient from "./axiosInstance"

// 모임 생성
export const createMeeting = async (formData) => {
  try {
    // const response = await apiClient.post('/meeting', meetingData)

    const response = await apiClient.post('/meeting', formData, {  
      headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data
  } catch (error) {
    throw error
  }
}