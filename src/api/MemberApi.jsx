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