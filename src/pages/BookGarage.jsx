import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Option, Select, Textarea } from '@mui/joy'
import { useForm, Controller } from "react-hook-form"
import React, { useEffect, useState } from 'react'

import { getData, setData } from '../utils/firebaseHelper.js';

import moment from 'moment'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase.js';
import { v4 as uuid } from 'uuid'



function BookGarage() {

    const { garageId } = useParams()
    const [garageInfo,setGarageInfo] = useState()
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchGarageInfo() {
            let garageData = await getData("garages", garageId);
            if(garageData.exists()){
                setGarageInfo(garageData.data())
            }
        }
        if(garageId){
            fetchGarageInfo()
        }

    }, [garageId])

    const { control, handleSubmit } = useForm({
        defaultValues: {
            startTime: '',
            endTime: ''
        }
    });

    function checkValidDate(data) {
        return moment(data.startTime).isAfter(new Date()) && moment(data.endTime).isAfter(new Date()) && moment(data.startTime).isBefore(moment(data.endTime))
    }

    function getBookingTime(data) {
        let actualStart = 30 - (moment(data.startTime).minute() % 30)
        const validStart = moment(data.startTime).add(actualStart, "minutes");
        let actualEnd = 30 - (moment(data.endTime).minute() % 30)
        const validEnd = moment(data.endTime).add(actualEnd, "minutes");
        return moment.duration(validEnd - validStart).asHours()
    }

    const onSubmit = (data) => {
        if (checkValidDate(data)) {
            console.log("Valid")
            let duration = getBookingTime(data)
            let totalCost = Number(garageInfo.price) * Number(duration)
            if(confirm(`Booking for ${duration} hours. And total rent will be ₹ ${totalCost}`)){
                let bookingInfo = {garageId,bookedBy: user.uid,duration,totalCost,...data}
                setData('bookings',bookingInfo,uuid(),{}).then(()=>{
                    navigate("/")
                })
            }else{
                alert("Cancelling...")
            }
        } else {
            alert("Select valid time")
        }
    }


    return (
        <div className='px-10 py-10 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 flex flex-col gap-3'>
                <Controller
                    name="startTime"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Start Time</FormLabel><Input type='datetime-local' slotProps={{ input: {} }} {...field} /></FormControl>}
                />
                <Controller
                    name="endTime"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >End Time</FormLabel><Input type='datetime-local' slotProps={{ input: {} }} {...field} /></FormControl>}
                />

                <Button type="submit">Confirm</Button>
            </form>
        </div>
    )
}

export default BookGarage