import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../contexts/authContext";

export const AdminGuard = () => {
  const { user } = useContext(AuthContext);
  if (user?._id !== "656f7b9f5989462a5ee0deba") {
    return <Navigate to="/all-beers" />;
  }
  return <Outlet />;
};
