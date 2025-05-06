import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, serUser] = useState(null);

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

  //   onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      serUser(currentUser);
      console.log(currentUser);
    });
    return () => unSubscribe();
  });

  const contextValue = { createUser, updateUserProfile, loginUser, user };
  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
