import { Button } from '@mui/joy'
import React, { useEffect } from 'react'

import { auth, AuthProvider } from '../Firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

import { signInWithPopup } from 'firebase/auth'
import { getData, setData } from '../utils/firebaseHelper.js';


function Authentication() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])


    const handleSignIn = () => {
        signInWithPopup(auth, AuthProvider)
            .then(async (d) => {
                let currentUser = d.user
                let userData = await getData("users", currentUser.uid);
                if (!userData.exists()) {
                    setData("users", { displayName: currentUser.displayName, email: currentUser.email, uid: currentUser.uid, lastLogin: new Date().getTime() }, currentUser.uid, {})
                } else {
                    setData("users", { lastLogin: new Date().getTime() }, currentUser.uid, { merge: true })
                }
                navigate("/");

            })
            .catch((e) => { console.log("Error", e) })
    }

    return (
        <div className='grid grid-cols-3'>
            <div></div>
            <div className='flex mt-40'><Button className='w-full' onClick={handleSignIn}>Login</Button></div>
            <div></div>

        </div>
    )
}

export default Authentication