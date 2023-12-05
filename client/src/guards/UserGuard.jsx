import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../contexts/authContext";

export const UserGuard = () => {
  const { user } = useContext(AuthContext);
  if (user?._id) {
    return <Navigate to="/all-beers" />;
  }
  return <Outlet />;
};
