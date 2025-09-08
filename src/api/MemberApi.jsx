import apiClient from "./axiosInstance"

// 로그인
export const memberLogin = async (loginData) => {
  try {
    const response = await apiClient.post('/login', loginData)
    return response.data
  } catch (error) {
    console.error('로그인 실패:', error)
    throw error
  }
}

