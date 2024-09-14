import { AspectRatio, Button, Card, CardContent, Chip, Typography } from '@mui/joy'
import React from 'react'

function Card_Manage({data}) {
  let {name,description,address,coverImageURL,price} = data
  console.log({...data})
  return (
    <Card>
      <div className='font-bold text-lg'>{name}</div>
      <div className='font-semibold text-xs'>{description}</div>
      <div className='font-medium text-xs'>{address}</div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={coverImageURL}
          srcSet={coverImageURL}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <div className='flex justify-between'>
          <div className='flex font-sans items-baseline gap-2'>
            <div className='text-xl font-bold'>₹ {price}</div>
            <div className='text-xs font-semibold'>/hr</div>
          </div>
          <div>
            <Chip color='success' size='md' variant='soft'>Available</Chip>
          </div>
        </div>

        <div className='flex'>
          <Button className='w-full'>Edit</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card_Manage