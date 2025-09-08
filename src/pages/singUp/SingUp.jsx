import React, { useState } from "react";
import { memberSingUp } from "../../api/MemberApi";
import '../../css/Login.css'
import SignUpForm from "./SignUpForm";

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const memberSingUpSubmit = async (e) => {
        e.preventDefault();

        try{
            await memberSingUp(formData);
            alert("회원가입에 성공했습니다.");
            window.location.href = "/login";
        } catch (error) {
            if (error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("회원가입에 실패했습니다.");
            }
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                <h2>회원가입</h2>
                <SignUpForm formData={formData} handleChange={handleChange} memberSingUpSubmit={memberSingUpSubmit} />
                <div className="links">
                    <a href="/login">이미 계정이 있으신가요? 로그인</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;