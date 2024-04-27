
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
        githubLogin
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



