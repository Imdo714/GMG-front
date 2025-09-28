import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../useContext/AuthContext";

export default function ProtectedRoute() {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        alert("로그인이 필요한 페이지입니다.");
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
