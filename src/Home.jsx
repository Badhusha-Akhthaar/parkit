//Hooks
//Misc
//CSS

// Authentication
import auth from './Firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { Avatar, Icon, Input, ListItemStandard, ShellBar, ShellBarItem, SideNavigation, SideNavigationItem } from '@ui5/webcomponents-react'
import { Outlet } from 'react-router-dom';

//Components

function App() {
  const auth = getAuth();

  return (
    <>
      <ShellBar primaryTitle='Park-It' secondaryTitle='Rent a garage' profile={<Avatar initials='UU'/>} className='shadow-sm'
        searchField={<Input placeholder='Search with location name' icon={<Icon name="search" />} showClearIcon/>}
        showSearchField='true'
        onSearchButtonClick={()=>{}}
        menuItems={<><ListItemStandard>Book a Garage</ListItemStandard><ListItemStandard>My Garages</ListItemStandard><ListItemStandard>Manage Bookings</ListItemStandard></>}>
      </ShellBar>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App
