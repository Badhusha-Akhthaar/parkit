//Hooks
//Misc
//CSS
import "@ui5/webcomponents-icons/dist/log.js"

// Authentication

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from './Firebase.js'
import { useEffect } from "react";
import AppBar from "./components/AppBar.jsx";
import Search from "./pages/Search.jsx";
import NewGarage from "./pages/NewGarage.jsx";
import MyGarages from "./pages/MyGarages.jsx";
import BookGarage from "./pages/BookGarage.jsx";

//Components

function App() {

  let [user] = useAuthState(auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(user)
  // }, [])

  const handleSignOut = () => {
    // signOut(auth).then((d) => { navigate("/login") }).catch((e) => { console.log("Unable to logout") })
  }


  return (
    <>
    <AppBar/>
    <BookGarage/>
    {/* <MyGarages/> */}
    {/* <NewGarage/> */}
    {/* <Search/> */}
    </>
  )
}

export default App
