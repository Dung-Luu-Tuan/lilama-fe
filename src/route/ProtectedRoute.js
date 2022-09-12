import { Navigate } from "react-router-dom";
import { loginStore } from "../store/loginStore";

const ProtectedRoute = ({ children }) => {
  const token = loginStore((state) => state.success);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
