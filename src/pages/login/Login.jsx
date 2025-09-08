import React, { useContext, useState } from "react";
import { memberLogin } from "../../api/MemberApi";
import { AuthContext } from "../../useContext/AuthContext";
import "../../css/Login.css";
import LoginForm from "./LoginForm";
import SocialLogin from "../../components/login/SocialLogin";

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const memberLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await memberLogin(loginData)
            const { accessToken, userId, userName } = response.data;
            login({ accessToken, userId, userName });

            window.location.href = "/";
            alert("로그인 성공");
        } catch (error) {
            console.error("로그인 실패:", error);
            alert("로그인에 실패했습니다.");
        }
    };

    return(
        <div class="container">
            <div class="login-container">
                <h2>로그인</h2>loginData
                <LoginForm loginData={loginData} handleChange={handleChange} memberLoginSubmit={memberLoginSubmit}/>
                <div className="links">
                    <a href="/singUp">계정이 없으신가요? 회원가입</a>
                </div>
                <SocialLogin />
            </div>
        </div>
    )
}

export default Login;