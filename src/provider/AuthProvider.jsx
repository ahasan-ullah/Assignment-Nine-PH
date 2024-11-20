import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext(null);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createNewUser=(email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
  };

  const updateUserProfile=(updatedData)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,updatedData);
  }
  const updateUserProfile2=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData);
  }

  const userLogin=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  const logout=()=>{
    setLoading(true);
    return signOut(auth);
  }

  const resetPassword=(e)=>{
    setLoading(true);
    return sendPasswordResetEmail(auth,e);
  }

  const authInfo={
    user,
    setUser,
    createNewUser,
    updateUserProfile,
    loading,
    logout,
    userLogin,
    googleSignIn,
    updateUserProfile2,
    resetPassword
  }


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    })
    return()=>{
      unsubscribe();
    }
  },[])
  return(
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  );
}
export default AuthProvider;