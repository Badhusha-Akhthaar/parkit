import { Button, Checkbox, FormControl, FormLabel, Input, Option, Select, Slider } from '@mui/joy'
import React, { useEffect, useState } from 'react'

import { State, City } from 'country-state-city'
import { Search } from '@mui/icons-material'
import { getGaragesByFilters } from '../utils/firebaseHelper'

function FilterBar({ getGarages }) {

    const [states, setStates] = useState([])
    const [selectedState, setSeletectedState] = useState("TN")
    const [cities, setCities] = useState([])
    const [selectedCity, setSeletectedCity] = useState("Madurai")
    const [roof, setRoof] = useState(false)
    const [cctv, setCCTV] = useState(false)
    const [ev, setEV] = useState(false)

    useEffect(() => {
        async function getStates() {
            setStates(State.getStatesOfCountry('IN'))
        }
        getStates()
    }, [])

    useEffect(() => {

        async function getCities() {
            setCities(City.getCitiesOfState('IN', selectedState))
        }
        if (selectedState != null) {
            getCities()
        }
    }, [selectedState])

    function handleSelectedState(event, newValue) {
        setSeletectedState(newValue)
    }
    function handleSelectedCity(event, newValue) {
        setSeletectedCity(newValue)
    }
    function handleSearch() {
        let filterParams = [
            {
                param: 'city',
                value: selectedCity
            },
            {
                param: 'state',
                value: selectedState
            }
        ]

        if (roof) {
            filterParams.push({
                param: 'hasRoof',
                value: roof
            })
        }
        if (ev) {
            filterParams.push({
                param: 'hasEV',
                value: ev
            })
        }
        if (roof) {
            filterParams.push({
                param: 'hasCCTV',
                value: cctv
            })
        }


        // getGarages("Hello")
        getGaragesByFilters(filterParams)
            .then((d) => {

                let filteredData = d.docs.map((x) => {
                    return { id: x.id, ...x.data() }
                });
                getGarages(filteredData)
            })
            .catch((e) => {
                console.log(e)
            });
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-10 items-center'>
                <FormControl>
                    <FormLabel>State</FormLabel>
                    <Select className='w-full' defaultValue={selectedState} onChange={handleSelectedState} >
                        {
                            states && states.map((state) => {
                                return <Option key={state["isoCode"]} value={state["isoCode"]}>{state["name"]}</Option>
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Select className='w-full' defaultValue={selectedCity} onChange={handleSelectedCity}>
                        {
                            cities && cities.map((state) => {
                                return <Option key={state["name"]} value={state["name"]}>{state["name"]}</Option>
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <Checkbox label="Roof" value={roof} onChange={() => { setRoof(!roof) }} />
                </FormControl>
                <FormControl>
                    <Checkbox label="CCTV" value={cctv} onChange={() => { setCCTV(!cctv) }} />
                </FormControl>
                <FormControl>
                    <Checkbox label="EV Charging" value={ev} onChange={() => { setEV(!ev) }} />
                </FormControl>
            </div>
            <div>
                <Button startDecorator={<Search />} onClick={handleSearch}>Search</Button>
            </div>

        </div>
    )
}

export default FilterBar