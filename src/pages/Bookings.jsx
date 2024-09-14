import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase'
import { getAllBookings } from '../utils/firebaseHelper'

import Booking from '../components/Booking.jsx'

function Bookings() {

    const [user] = useAuthState(auth)
    const [bookings,setBookings] = useState([])
    useEffect(()=>{
        async function getBookings() {
            getAllBookings(user.uid)
                .then((d)=>{
                    setBookings(d.docs)
                    console.log(d.docs)
                })
                .catch((e)=>{
                    console.log(e)
                })
        }
        if(user){
            getBookings()
        }
        
    },[user])
    return (
        <div className='pt-10 px-32'>

            {
                bookings && bookings.map((booking)=>{
                    return <Booking key={booking.id} data={booking.data()}/>
                })
            }
            
        </div>
    )
}

export default Bookings