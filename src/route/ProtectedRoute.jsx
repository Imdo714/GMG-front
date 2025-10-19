import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../useContext/AuthContext";

export default function ProtectedRoute() {
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    if (isLoading) return null;

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
