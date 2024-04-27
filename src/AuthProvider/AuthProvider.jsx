
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    // set user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // sign in user
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    // logout
    const logOut = () => {
        return signOut(auth);
    }
    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth , googleProvider);
    }
    // github login
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }
    // update image and name
    const createUpdateProfile = (name,image) => {
        setUser({
            ...user,
            displayName:name,
            photoURL:image,
           })
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })
    }



    // observer
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        googleLogin,
        githubLogin,
        createUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;



