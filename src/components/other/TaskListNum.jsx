import React from 'react'

const TaskListNum = ({data}) => {
  return (
  <>
      <div className='flex p-7 items-center gap-8 flex-nowrap'>
    <div className='bg-red-500 h-[300px] w-[400px] rounded-lg p-3'>
        <h2 className='bg-red-500 text-center mt-6 text-6xl font-bold'>{data.tasks.failed}</h2>
        <h2 className='bg-red-500 text-center mt-12 capitalize text-6xl font-bold'>failed task</h2>
    </div>
    <div className='bg-blue-500 h-[300px] w-[400px] rounded-lg p-3'>
    <h2 className='bg-blue-500 text-center mt-6 text-6xl font-bold'>{data.tasks.newTask}</h2>
    <h2 className='bg-blue-500 text-center mt-12 capitalize text-6xl font-bold'>new task</h2>
    </div>
    <div className='bg-green-500 h-[300px] w-[400px] rounded-lg p-3'>
    <h2 className='bg-green-500 text-center mt-6 text-6xl font-bold'>{data.tasks.completed}</h2>
    <h2 className='bg-green-500 text-center mt-12 capitalize text-6xl font-bold'>complated task</h2>
    </div>
    <div className='bg-yellow-500 h-[300px] w-[400px] rounded-lg p-3'>
    <h2 className='bg-yellow-500 text-center mt-6 text-6xl font-bold'>{data.tasks.active}</h2>
    <h2 className='bg-yellow-500 text-center mt-12 capitalize text-6xl font-bold'>accepted task</h2>
    </div>
</div>
    </>
  )
}

export default TaskListNum
