import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Layout/Loading";
import { AuthContext } from "../store/contexts/contexts";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
