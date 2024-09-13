import { Avatar, Button, Link, Typography } from '@mui/joy'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

import { auth } from '../Firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';


function AppBar({ handleSignOut }) {
    let [user] = useAuthState(auth);
    return (
        <div className='w-full h-12 bg-slate-300 flex py-2 px-4 justify-between items-center shadow-sm font-sans'>
            <div className='items-center flex w-full gap-7 font-sans'>
                <Typography variant='plain' level='h3'>Park-It</Typography>
                <div className='flex gap-5'>
                    <Link variant='plain' level="title-md" underline='none' component={RouterLink} to="search">Rent a Garage</Link>
                    <Link variant='plain' level="title-md" underline='none' component={RouterLink} to="mygarages">Manage Garage</Link>
                </div>
            </div>
            <div className='flex gap-2'>
                {
                    user ? <Avatar src={user.photoURL} /> : <Avatar src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' />
                }
                
                <Button size='sm' onClick={handleSignOut}>Logout</Button>
            </div>
        </div>
    )
}

export default AppBar