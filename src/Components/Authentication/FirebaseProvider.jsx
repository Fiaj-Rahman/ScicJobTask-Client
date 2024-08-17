import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import auth from './firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    //Register user
    const createUser = (email, password)=>{
        setLoading(true)
     return  createUserWithEmailAndPassword(auth, email, password)
    }


    //update User
    const updateUserProfile=(name,photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
          
    }

    //login User
    const signInUser = (email, password) =>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Github login
    const githubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //Log Out

    const logout =()=>{
        setUser(null)
        signOut(auth)
        toast("Logout Website...");
    }

    //Observer
    useEffect(()=>{
      const unsubcribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setLoading(false)

            } 
            setLoading(false)
          });
          return () =>unsubcribe()

    },[])


    const allValues = {
        createUser, 
        user,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
       
        loading,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value = {allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;