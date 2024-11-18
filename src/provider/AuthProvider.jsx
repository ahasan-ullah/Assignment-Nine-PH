import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createNewUser=(email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
  };

  const updateUserProfile=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData);
  }

  const authInfo={
    user,
    setUser,
    createNewUser,
    updateUserProfile,
  }

  console.log(user);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(true);
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