import React, { useState } from "react";
import "../../css/Login.css";
import LoginForm from "./LoginForm";
import SocialLogin from "../../components/login/SocialLogin";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("로그인 성공");
    };

    return(
        <div class="container">
            <div class="login-container">
                <h2>로그인</h2>
                <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className="links">
                    <a href="/singUp">계정이 없으신가요? 회원가입</a>
                </div>
                <SocialLogin />
            </div>
        </div>
    )
}

export default Login;