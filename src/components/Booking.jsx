import { Card } from '@mui/joy'
import React from 'react'

function Booking({ data }) {
  let { duration, garageId, startTime, endTime, totalCost } = data
  return (
    <Card>
      <div className='flex gap-7'>
          <div className='font-bold'>Start Time<div className='font-semibold'>{new Date(startTime).toLocaleString()}</div></div>
          <div className='font-bold'>End Time<div className='font-semibold'>{new Date(endTime).toLocaleString()}</div></div>
          <div className='font-bold'>Duration<div className='font-semibold'>{duration}</div></div>
          <div className='font-bold'>Total Cost<div className='font-semibold'>{totalCost}</div></div>
      </div>
    </Card>
  )
}

export default Booking