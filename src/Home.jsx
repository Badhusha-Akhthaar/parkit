//Hooks
//Misc
//CSS
import "@ui5/webcomponents-icons/dist/log.js"

// Authentication

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from './Firebase.js'
import { useEffect } from "react";
import AppBar from "./components/AppBar.jsx";
import { Outlet, useNavigate } from "react-router-dom";

import {signOut} from 'firebase/auth'

//Components

function App() {

  let [user] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user)
  // useEffect(() => {
  //   console.log(user)
  // }, [])

  const handleSignOut = () => {
    signOut(auth).then((d) => { navigate("/login") }).catch((e) => { console.log("Unable to logout",e) })
  }


  return (
    <>
    <AppBar handleSignOut={handleSignOut}/>
    <Outlet/>
    </>
  )
}

export default App
