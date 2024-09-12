import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Option, Select, Textarea } from '@mui/joy'
import { useForm, Controller } from "react-hook-form"
import React from 'react'

function EditGarage() {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            description: '',
            address: '',
            landmark: '',
            city: '',
            state: '',
            pincode: 0,
            coordinates: '',
            price: 0,
            size: 0,
            hasCCTV: false,
            hasEV: false,
            hasRoof: false
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className='px-10 py-10 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 flex flex-col gap-3'>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Garage Name</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Description</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Address</FormLabel><Textarea {...field} /></FormControl>}
                />
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >City</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >State</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="landmark"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Landmark</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="pincode"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Pincode</FormLabel><Input type='number' {...field} /></FormControl>}
                />
                <Controller
                    name="coordinates"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Geo-Coordinates</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Price</FormLabel><Input type='number' {...field} endDecorator={<div className='font-semibold'>/hr</div>} startDecorator={<div className='font-bold'>₹</div>} /></FormControl>}
                />
                <Controller
                    name="size"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Size</FormLabel><Input type='number' {...field} endDecorator={<div className='font-semibold'>Sqft.</div>} /></FormControl>}
                />
                <div className='flex gap-4'>
                    <Controller
                        name="hasCCTV"
                        control={control}
                        render={({ field }) => <Checkbox {...field} label="CCTV" />}
                    />
                    <Controller
                        name="hasEV"
                        control={control}
                        render={({ field }) => <Checkbox {...field} label="EV Charging" />}
                    />
                    <Controller
                        name="hasRoof"
                        control={control}
                        render={({ field }) => <Checkbox {...field} label="Roof" />}
                    />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default EditGarage