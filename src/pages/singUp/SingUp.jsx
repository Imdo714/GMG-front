import React, { useState } from "react";
import '../../css/Login.css'
import SignUpForm from "./SignUpForm";

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        userClass: "",
        userTarget: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("회원가입 성공!");
    };

    return (
        <div className="container">
            <div className="login-container">
                <h2>회원가입</h2>
                <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="links">
                    <a href="/login">이미 계정이 있으신가요? 로그인</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;