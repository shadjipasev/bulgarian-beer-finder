import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../contexts/authContext";

export const GuestGuard = () => {
  const { user } = useContext(AuthContext);
  if (!user?._id) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
