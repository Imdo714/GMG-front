import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // 처음 실행했을 때 정보 있는지 확인
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const userData = sessionStorage.getItem("user");

        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }
    }, []);

    // 로그인 함수
    const login = ({ accessToken, userId, userName}) => {
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("user", JSON.stringify({ userId, userName }));

        setIsLoggedIn(true);
        setUser({ userId, userName });
    };

    // 로그아웃 함수
    const logout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
