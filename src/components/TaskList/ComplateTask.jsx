import React from 'react'

const ComplateTask = () => {
  return (
    <div className='bg-blue-500 h-[400px] w-[400px] p-3 rounded-lg'>
    <div className='flex justify-between bg-blue-500'>
            <h2 className='bg-green-700 text-lg font-bold rounded-lg px-4 py-2'>new task</h2>
            <h2 className='bg-blue-500 text-lg font-bold capitalize text-end'>28 jan 2000</h2>
        </div>
        <h2 className='bg-blue-500 text-2xl font-semibold mt-10'>Make a MERN stack project</h2>
        <p className='bg-blue-500 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo alias perferendis totam.</p>
        <div className='flex justify-center mt-[80px] bg-blue-500 p-5'>
            <button className='bg-green-400 px-1 py-2 rounded w-full text-black font-semibold'>Completed</button>
        </div>
    </div>
  )
}

export default ComplateTask
