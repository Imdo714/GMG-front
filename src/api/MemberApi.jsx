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

// 회원가입
export const memberSingUp = async (singUpData) => {
  try {
    const response = await apiClient.post('/singUpForm', singUpData)
    return response.data
  } catch (error) {
    console.error('회원가입 실패:', error)
    throw error
  }
}

// 참가했언더 회원 기록 리스트 
export const myPage = async () => {
  try {
    const response = await apiClient.post(`/my-page`);
    return response.data
  } catch (error) {
    throw error
  }
}