import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Option, Select, Textarea } from '@mui/joy'
import { useForm, Controller } from "react-hook-form"
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase'
import { getDownloadURL, uploadBytes, ref as storageRef } from 'firebase/storage'
import { uploadImage, setData } from '../utils/firebaseHelper'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { State, City } from 'country-state-city'

function NewGarage() {

    const [user] = useAuthState(auth);
    const [coverImage, setCoverImage] = useState();
    const [states, setStates] = useState([])
    const [selectedState, setSeletectedState] = useState("TN")
    const [cities, setCities] = useState([])
    const [selectedCity, setSeletectedCity] = useState("Madurai")
    const navigate = useNavigate()

    useEffect(() => {
        async function getStates() {
            setStates(State.getStatesOfCountry('IN'))
            console.log(State.getStatesOfCountry('IN'))
        }
        getStates()
    }, [])

    useEffect(() => {

        async function getCities() {
            console.log(selectedState)
            setCities(City.getCitiesOfState('IN', selectedState))
            console.log(City.getCitiesOfState('IN', selectedState))
        }
        if (selectedState != null) {
            getCities()
        }
    }, [selectedState])

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            description: '',
            address: '',
            landmark: '',
            pincode: 0,
            coordinates: '',
            price: 0,
            size: 0,
            hasCCTV: false,
            hasEV: false,
            hasRoof: false,
            coverPicture: ""
        }
    })

    const onSubmit = async (data) => {




        // if (coverImage == null) {
        //     alert("Add a cover image");
        //     return
        // }
        try {
            let coverImageURL = await uploadImage(`garages/images/${uuid()}`, coverImage);
            data.ownerId = user.uid;
            data.coverImageURL = coverImageURL
            data.city = selectedCity
            data.state = selectedState
            delete data.coverPicture
            setData('garages', data, uuid(), {})
                .then((d) => {
                    console.log(d);
                    navigate("/mygarages")
                })
                .catch((e) => { console.log("Error data save", e) })
        } catch (error) {
            alert("Failed to save data")
        }
    }

    function handleSelectedState(event, newValue) {
        setSeletectedState(newValue)
    }
    function handleSelectedCity(event, newValue) {
        setSeletectedCity(newValue)
    }


    return (
        <div className='px-10 py-10 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 flex flex-col gap-3'>
                <Controller
                    name="name"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Garage Name</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="description"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Description</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="address"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Address</FormLabel><Textarea {...field} /></FormControl>}
                />
                <FormControl><FormLabel >State</FormLabel><Select required defaultValue={selectedState}  onChange={handleSelectedState}>
                    {
                        states && states.map((state) => {
                            return <Option key={state["isoCode"]} value={state["isoCode"]}>{state["name"]}</Option>
                        })
                    }
                </Select></FormControl>
                <FormControl><FormLabel >City</FormLabel><Select required defaultValue={selectedCity} onChange={handleSelectedCity}>
                    {
                        cities && cities.map((city) => {
                            return <Option key={city["name"]} value={city["name"]}>{city["name"]}</Option>
                        })
                    }
                </Select></FormControl>

                <Controller
                    name="landmark"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Landmark</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="pincode"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Pincode</FormLabel><Input type='number' {...field} /></FormControl>}
                />
                <Controller
                    name="coordinates"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Geo-Coordinates</FormLabel><Input {...field} /></FormControl>}
                />
                <Controller
                    name="price"
                    control={control}
                    rules={{required: true}}
                    render={({ field }) => <FormControl><FormLabel >Price</FormLabel><Input type='number' {...field} endDecorator={<div className='font-semibold'>/hr</div>} startDecorator={<div className='font-bold'>₹</div>} /></FormControl>}
                />
                <Controller
                    name="size"
                    control={control}
                    rules={{required: true}}
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
                <Controller
                    name="coverPicture"
                    control={control}
                    render={({ field }) => <FormControl><FormLabel >Garage Image</FormLabel><Input type='file' {...field} slotProps={{ input: { onChange: (e) => { setCoverImage(e.target.files[0]) } } }} /></FormControl>}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default NewGarage