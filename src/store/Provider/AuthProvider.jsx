import React from "react";
import { AuthContext } from "../contexts/contexts";

const AuthProvider = ({ children }) => {
  const hello = "world";
  const contextValue = { hello };

  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
