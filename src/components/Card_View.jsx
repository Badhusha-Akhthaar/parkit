import { AspectRatio, Button, Card, CardContent, Chip, Typography } from '@mui/joy'
import React from 'react'

function Card_View() {
  return (
    <Card>
      <Typography level="title-lg">Sedan for Rent</Typography>
      <Typography level="body-xs">24,Mosque North Street,Madurai</Typography>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <div className='flex justify-between'>
          <div className='flex font-sans items-baseline gap-2'>
            <div className='text-xl font-bold'>₹ 63.00</div>
            <div className='text-xs font-semibold'>/hr</div>
          </div>
          <div>
            <Chip color='success' size='md' variant='soft'>Available</Chip>
          </div>
        </div>

        <div className='flex'>
          <Button className='w-full'>Book</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card_View