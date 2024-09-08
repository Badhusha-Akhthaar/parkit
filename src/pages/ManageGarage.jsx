import React from 'react'
import ManageGarageCard from '../components/ManageGarageCard'

function ManageGarage() {
  return (
    <div className='p-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-4'>
      <ManageGarageCard/>
    </div>
  )
}

export default ManageGarage