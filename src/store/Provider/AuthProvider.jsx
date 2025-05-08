import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, serUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");

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

  // google login
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // reset password email
  const handleResetPasswordEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
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
    signInWithGoogle,
    handleResetPasswordEmail,
    resetPasswordEmail,
    setResetPasswordEmail,
  };
  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
