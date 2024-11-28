import React, { createContext, useEffect, useState } from 'react'
import { Getlocalstrg, Setlocalstrg } from '../utils/LocalStorage';


export const Authcontext = createContext();
const AuthProvider = ({ children }) => {

    const [userdata, setuserdata] = useState(null)



    useEffect(() => {
        Setlocalstrg()
        const {employees,admin}=Getlocalstrg()
        setuserdata({ employees, admin })
    }, [])



    return (
        <div>
            <Authcontext.Provider value={userdata}>
                {children}
            </Authcontext.Provider>
        </div>
    )
}

export default AuthProvider
