import React from 'react'
import BookGarageCard from '../components/BookGarageCard'

function BookGarage() {
    return (
        <>
            <div className='p-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-4'>
                <BookGarageCard />
                <BookGarageCard />
                <BookGarageCard />
                <BookGarageCard />
                <BookGarageCard />
                <BookGarageCard />
                <BookGarageCard />
                <BookGarageCard />
            </div>
        </>

    )
}

export default BookGarage