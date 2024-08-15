import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useAuthCheck from "../hooks/useAuthCheck";

export default function Layout() {
  const authIsReady = useAuthCheck();
  return !authIsReady ? (
    <div>Loading</div>
  ) : (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
