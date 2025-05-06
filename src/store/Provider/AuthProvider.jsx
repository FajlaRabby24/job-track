import React from "react";
import { AuthContext } from "../contexts/contexts";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   updata user profile
  const updateUserProfile = (updatedProfile) => {
    return updateProfile(auth.currentUser, updatedProfile);
  };

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const contextValue = { createUser, updateUserProfile, loginUser };
  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
