import React, { useState } from 'react'
import Card_View from '../components/Card_View'
import { Button, IconButton, Input } from '@mui/joy'
import { SearchRounded } from '@mui/icons-material'
import FilterBar from '../components/FilterBar'

function Search() {

    const [garages,setGarages] = useState([]);

    function getGarages(filterResult) {
        setGarages(filterResult)
    }

    return (
        <>
            <div className='px-36 pt-4'>
                <FilterBar getGarages={getGarages}/>
            </div>
            <div className='grid grid-cols-6 gap-2 h-full px-3 pt-10 py-3'>
            {
                    garages.map((garage)=>{

                        return <Card_View key={garage.id} data={garage}/>

                    })
                }
            </div>
        </>
    )
}

export default Search