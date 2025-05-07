import React, { use } from "react";
import { AuthContext } from "../store/contexts/contexts";
import { Navigate } from "react-router";
import Loading from "../components/Layout/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default PrivateRoute;
