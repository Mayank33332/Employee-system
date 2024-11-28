import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-7  mt-7 rounded border-[2px] border-white py-9'>
   
      <form className='flex flex-wrap justify-between items-start w-full'>

        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mt-2'>Task title</h3>
            <input type="text" placeholder='enter task' className='text-gray-300 text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-4'/>
            </div>

            
        <div>
          <h3 className='text-sm text-gray-300 mt-3'>Date</h3>
          <input type="date"  className='text-gray-300 text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-2 '/>
        </div>

        <div>

          <h3 className='text-sm text-gray-300 mt-3'>Assign to</h3>
          <input type="text" placeholder='enter employee name'  className='text-gray-300 text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-4' />
        </div>

        <div>
          <h3 className='text-sm text-gray-300 mt-3'>Catagory</h3>
          <input type="text" placeholder='design , dev etc....'  className='text-gray-300 text-sm px-1 py-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-4'/>
        </div> 

          
        </div>


        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mt-2'>Descripton</h3>
          <textarea className='text-gray-300 w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-4' placeholder='enter details of task' ></textarea>
          <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full py-4'>Create task</button>  
        </div>


       
      </form>
    </div>
  )
}

export default CreateTask
