import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useAuthCheck from "../hooks/useAuthCheck";
import ProtectedRoute from "./ProtectedRoute";

export default function Layout() {
  const authIsReady = useAuthCheck();
  return !authIsReady ? (
    <div>Loading</div>
  ) : (
    <ProtectedRoute>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </ProtectedRoute>
  );
}
