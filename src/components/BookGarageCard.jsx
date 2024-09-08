import { Button, Card, CardHeader, Carousel, ObjectStatus } from '@ui5/webcomponents-react'
import React from 'react'

function BookGarageCard() {
    return (
        <>
            <Card className='cursor-pointer' header={<CardHeader titleText='Sedan Garage' subtitleText='2nd Cross Street,K.K Nagar,Madurai' additionalText='4.4 / 5' />} >
                <div className='px-4 py-4'>
                    {/* <div className='flex'>
                        <ObjectStatus showDefaultIcon state='Positive'>Available</ObjectStatus>
                    </div> */}

                    <div className='h-40'>
                        <Carousel
                            arrowsPlacement="Content"
                            backgroundDesign='Transparent'
                            hidePageIndicator='true'
                            cyclic='true'
                            onNavigate={function _s() { }}
                        >
                            <img
                                alt="img-sample 1"
                                src="https://cdn.nar.realtor/sites/default/files/assets/images/2208_HD_GarageTrends.png"
                            />
                            <img
                                alt="img-sample 1"
                                src="https://amazingarchitecture.com/storage/4902/garage-design.jpg"
                            />
                        </Carousel>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='text-2xl flex gap-2 items-baseline'>
                            <div>₹ 65.00</div>
                            <div className='text-center text-sm'>/hour</div>
                        </div>
                        <ObjectStatus showDefaultIcon state='Positive'>Available</ObjectStatus>
                    </div>
                    <Button className='w-full mt-3' design='Emphasized'>Book</Button>

                </div>
            </Card>
        </>
    )
}

export default BookGarageCard