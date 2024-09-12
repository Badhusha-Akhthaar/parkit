import { Avatar, Link, Typography } from '@mui/joy'
import React from 'react'

function AppBar() {
    return (
        <div className='w-full h-12 bg-slate-300 flex py-2 px-4 justify-between items-center shadow-sm font-sans'>
            <div className='items-center flex w-full gap-7 font-sans'>
                <Typography variant='plain' level='h3'>Park-It</Typography>
                <div className='flex gap-5'>
                    <Link variant='plain' level="title-md" underline='none'>Rent a Garage</Link>
                    <Link variant='plain' level="title-md" underline='none'>Manage Garage</Link>
                    <Link variant='plain' level="title-md" underline='none'>My Bookings</Link>
                </div>
            </div>
            <div>
                <Avatar src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'/>
            </div>
        </div>
    )
}

export default AppBar