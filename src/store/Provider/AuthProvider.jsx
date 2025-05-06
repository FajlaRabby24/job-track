import React from "react";
import { AuthContext } from "../contexts/contexts";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const contextValue = { createUser };
  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
