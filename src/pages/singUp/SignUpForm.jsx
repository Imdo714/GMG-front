import FormInput from "../../components/login/FormInput";

const SignUpForm = ({ formData, handleChange, memberSingUpSubmit }) => (
    <form onSubmit={memberSingUpSubmit}>
        <FormInput label="이메일" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="예: test@naver.com" />
        <FormInput label="비밀번호" id="password" name="password" type="password" value={formData.password} onChange={handleChange} required placeholder="예: 비밀번호" />
        <FormInput label="이름" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="예: 홍길동" />
        <button type="submit" className="signup-btn">회원가입</button>
    </form>
);

export default SignUpForm;