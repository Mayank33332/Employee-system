import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import ComplateTask from '../TaskList/ComplateTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  return (
    <div className='flex justify-center h-[140vh] mt-[100px] p-7 gap-10'>
        {data.taskscount.map((el,idx)=>{
            if(el.active){
                return <AcceptTask key={idx}/>
            }
            if(el.newTask){
                return <NewTask key={idx}/>
            }
            if(el.completed){
                return <ComplateTask key={idx}/>
            }
            if(el.failed){
                return <FailedTask key={idx}/>
            }
        })

    }
        
    </div>
  )
}

export default TaskList
