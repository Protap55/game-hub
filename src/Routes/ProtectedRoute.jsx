import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
