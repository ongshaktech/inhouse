import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const isLogedIn = useAuth();

  return isLogedIn ? children : <Navigate to="/sign-in" />;
}
