
import { useContext, createContext, useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, AuthProvider } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { getData, setData } from '../utils/firebaseHelper.js'

const AuthContext = createContext({
    user: auth.currentUser,
    logIn: () => { },
    logOut: () => { }
})

export function AuthContextProvider({ children }) {
    console.log("Context initializing....")
    let [user, setUser] = useState(auth.currentUser)
    // let navigate = useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                console.log("Logging in")
                console.log(currentUser)
                setUser(currentUser)
                // let userInfo = await getData('users', currentUser.uid);
                // console.log(userInfo)
                // if (!userInfo.exists()) {
                //     setData('users', { uid: currentUser.uid, email: currentUser.email, displayName: currentUser.displayName, lastLogin: new Date().getTime() }, currentUser.uid, {})
                // } else {
                //     setData("users", { lastLogin: new Date().getTime() }, currentUser.uid, { merge: true })
                // }
            }
            else {
                console.log(currentUser)
                console.log("Logging out")
            }
        })
        return () => {
            unsubscribe();
        }
    }, [setUser]);

    async function logIn() {
        await signInWithPopup(auth, AuthProvider);
        // navigate("/")
    }
    async function logOut() {
        await signOut(auth);
        setUser(null)
        // navigate("/login")
    }

    return <AuthContext.Provider value={{ user, logIn, logOut }}>{children}</AuthContext.Provider>

}

export function useAuthContext() {
    return useContext(AuthContext)
}

