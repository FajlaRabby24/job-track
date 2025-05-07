import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, serUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   updata user profile
  const updateUserProfile = (updatedProfile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedProfile);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      serUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => unSubscribe();
  });

  const contextValue = {
    createUser,
    updateUserProfile,
    loginUser,
    user,
    signOutUser,
    loading,
  };
  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
