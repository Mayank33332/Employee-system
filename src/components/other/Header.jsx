import React from 'react'

const Header = ({data}) => {
  return (
    
       <div className='flex justify-between p-[60px]'>
      <div>
     <h1 className='text-4xl font-bold'>Hello, {data.name} 👋</h1>
      </div>
      <div>
      <button className='px-9 py-3 bg-red-500 text-white font-semibold capitalize rounded-md'>log out</button>
      </div>
    </div>
   
  )
}

export default Header
