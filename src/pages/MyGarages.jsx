import React from 'react'
import Card_Manage from '../components/Card_Manage'
import { Button, IconButton, Input } from '@mui/joy'
import { SearchRounded } from '@mui/icons-material'

function MyGarages() {
    return (
        <>
            <div className='grid grid-cols-6 gap-2 h-full px-3 pt-5 py-3'>
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
                <Card_Manage />
            </div>
        </>
    )
}

export default MyGarages