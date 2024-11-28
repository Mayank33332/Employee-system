import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmpDash from './components/dashboard/EmpDash'
import Admindash from './components/dashboard/Admindash'
import   { Authcontext } from './context/AuthProvider'




const App = () => {


const [user,setuser]=useState(null);
const Authdata=useContext(Authcontext)
console.log(Authdata);
const [userloggdin , setuserloggdin]=useState(null)


useEffect(()=>{
    const loginuser=localStorage.getItem("loggedin")
   if(loginuser){
    console.log('mai login hu');
    
   }
    
})

const Handlelogin=(username,pass)=>{
    if(username=='admin@me.com' && pass=='123'){
        console.log(username,pass);
        setuser('admin')
        localStorage.setItem("loggedin",JSON.stringify({role:'admin'}))
    } 

    else if(Authdata ){
    const employees=Authdata.employees.find((e)=>username==e.name && pass==e.password)
    if(employees){
        localStorage.setItem("loggedin",JSON.stringify({role:'user'}))
        setuser('user')
        setuserloggdin(employees)
    }
    }
    else{
            alert('enter valid email and password')

    }
    
}



return(
<>
{!user? <Login Handlelogin={Handlelogin}/>:''}

{user=='admin'?<Admindash/>:(user=='user'?<EmpDash data={userloggdin}/>:null)}






</>
    )
  
}

export default App
