import React, { useEffect, useRef, useState } from 'react'
import Card_Manage from '../components/Card_Manage'
import { Button, IconButton, Input, Link } from '@mui/joy'
import { SearchRounded } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { getGaragesByUser } from '../utils/firebaseHelper';

function MyGarages() {

    const [user] = useAuthState(auth)
    const [garages, setGarages] = useState([]);

    useEffect(() => {

        function fetchData() {
            getGaragesByUser(user.uid)
                .then((d) => {
                    // let destructedGarages = d.m
                    setGarages(d.docs)
                })
                .catch((e) => { console.log(e) });
        }
        if (user) {
            fetchData()
        }



    }, [user])


    useEffect(()=>{
        garages.forEach((d)=>{
            console.log(d.data())
        })
        console.log(garages)
    },[garages])


    return (
        <>
            <div className='flex pt-4 px-4 justify-end'>
                <Link variant='plain' level="title-md" underline='none' component={RouterLink} to="/garage/new">New Garage</Link>
            </div>
            <div className='grid grid-cols-6 gap-2 h-full px-3 pt-5 py-3'>

                {
                    garages.map((garage)=>{

                        return <Card_Manage data={garage.data()}/>

                    })
                }

                {/* <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage /> */}
            </div>
        </>
    )
}

export default MyGarages