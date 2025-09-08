import React from "react";
import FormInput from "../../components/login/FormInput";

const LoginForm = ({ loginData, handleChange, memberLoginSubmit }) => {
  return (
    <form onSubmit={memberLoginSubmit}>
        <FormInput label="이메일" id="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="예: test@naver.com" />
        <FormInput label="비밀번호" id="password" name="password" type="password" value={loginData.password} onChange={handleChange} required placeholder="예: 비밀번호" />

        <button type="submit" className="login-btn">로그인</button>
    </form>
  );
};

export default LoginForm;
