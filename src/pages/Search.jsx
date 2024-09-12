import React from 'react'
import Card_View from '../components/Card_View'
import { Button, IconButton, Input } from '@mui/joy'
import { SearchRounded } from '@mui/icons-material'

function Search() {
    return (
        <>
            <div className='px-48 pt-4'>
                <Input endDecorator={<Button startDecorator={<SearchRounded/>}>Search</Button>}/>
            </div>
            <div className='grid grid-cols-6 gap-2 h-full px-3 pt-5 py-3'>
                <Card_View />
                <Card_View />
                <Card_View />
                <Card_View />
                <Card_View />
                <Card_View />
                <Card_View />
                <Card_View />
            </div>
        </>
    )
}

export default Search