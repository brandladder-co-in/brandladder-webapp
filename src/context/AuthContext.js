import React, { useContext, useState, useEffect } from "react";

import { auth } from "../config/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    // updateProfile,
} from 'firebase/auth';
import "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    let [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);

    const clearError = () => setError(null);

    // create new user
    const signIn = async (email, password, username, phoneNumber) => {
        try {
            // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await createUserWithEmailAndPassword(auth, email, password);

            // await updateProfile(userCredential.user, {
            //     displayName: username,
            //     phoneNumber: phoneNumber
            // });

            clearError();
        } catch (error) {
            setError(error.message);
            console.error('Error while creating new user: ', error)
        }
    };


    // email signup
    const signUp = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            clearError();
        } catch (error) {
            setError(error.message);
        }
    };

    // google signin
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            clearError();
        } catch (error) {
            setError(error.message);
        }
    };

    // signout
    const signOutUser = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null)
            clearError();

        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signUp,
        signIn,
        signInWithGoogle,
        signOut: signOutUser,
        error,
        clearError,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
