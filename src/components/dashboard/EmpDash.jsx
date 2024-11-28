import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'
import TaskListNum from '../other/TaskListNum'



    
const EmpDash = ({data}) => {
  return (
   
    <>
   
   <Header data={data}/>
        <TaskListNum data={data}/>
        <TaskList data={data}/>
    </>
  )
}

export default EmpDash
