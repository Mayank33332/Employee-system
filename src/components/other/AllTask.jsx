import React from 'react'

const AllTask = () => {
  return (
    <div className='p-5 mt-5 h-48 overflow-auto'>
      <div className='bg-red-400  mb-3 px-4 py-2 flex justify-between rounded'>
        <h2 className='bg-red-400 text-white font-semibold text-xl capitalize'>mayank</h2>
        <h3 className='bg-red-400 text-white font-semibold text-xl capitalize'>make a UI design</h3>
        <h5 className='bg-red-400 text-bwhitefont-semibold text-xl capitalize'>status</h5>
      </div>

      <div className='bg-green-400 mb-3  px-4 py-2 flex justify-between'>
        <h2 className='bg-green-400 text-white font-semibold text-xl capitalize'>mayank</h2>
        <h3 className='bg-green-400 text-white font-semibold text-xl capitalize'>make a UI design</h3>
        <h5 className='bg-green-400 text-bwhitefont-semibold text-xl capitalize'>status</h5>
      </div>

      <div className='bg-blue-400 mb-3  px-4 py-2 flex justify-between'>
        <h2 className='bg-blue-400 text-white font-semibold text-xl capitalize'>mayank</h2>
        <h3 className='bg-blue-400 text-white font-semibold text-xl capitalize'>make a UI design</h3>
        <h5 className='bg-blue-400 text-bwhitefont-semibold text-xl capitalize'>status</h5>
      </div>    
    </div>
  )
}

export default AllTask
