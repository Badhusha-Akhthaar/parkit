import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Option, Select, Textarea } from '@mui/joy'
import { useForm, Controller } from "react-hook-form"
import React, { useState } from 'react'

import moment from 'moment'

function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

function BookGarage() {

    const [cost,setCost] = useState(0);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            startTime: '',
            endTime: ''
        }
    })

    const onSubmit = (data) => {
        if(moment(data.startTime).isAfter(new Date()) && moment(data.endTime).isAfter(new Date()) && moment(data.startTime).isBefore(moment(data.endTime))){
            console.log("Valid")
            let actualStart = 30 - (moment(data.startTime).minute() % 30)
            const validStart =  moment(data.startTime).add(actualStart, "minutes");
            console.log(validStart)
            let actualEnd = 30 - (moment(data.endTime).minute() % 30)
            const validEnd=  moment(data.endTime).add(actualEnd, "minutes");
            console.log(validEnd)


            console.log('Duration',moment.duration(validEnd - validStart).asHours())
        }else{
            console.log("Invalid")
        }

        
        
    }


    return (
        <div className='px-10 py-10 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 flex flex-col gap-3'>
                <Controller
                    name="startTime"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Start Time</FormLabel><Input type='datetime-local' slotProps={{input: {}}} {...field}/></FormControl>}
                />
                <Controller
                    name="endTime"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >End Time</FormLabel><Input type='datetime-local' slotProps={{input: {}}} {...field}/></FormControl>}
                />

                <Button type="submit">Confirm</Button>
            </form>
        </div>
    )
}

export default BookGarage