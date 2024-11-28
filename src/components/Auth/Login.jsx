import React, { useState } from 'react'

const Login = ({Handlelogin}) => {



    const [email, setemail] = useState('');
    const [password, setpasword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log('your email is', email);
        console.log('your password is ', password);
        setemail('');
        Handlelogin(email, password)
        setpasword('');


    }
    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <form
                onSubmit={(e) => {
                    submit(e);

                }}
                className='flex flex-col border-2 border-white px-[70px] py-[80px] rounded-lg '>

                <input
                    required
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value);


                    }}
                    className='py-3 px-7 border-2 border-teal-400 text-xl rounded-xl bg-transparent placeholder:text-white' type='text' placeholder='enter your name'
                />
                <input
                    required
                    value={password}
                    onChange={(e) => {
                        setpasword(e.target.value)


                    }}
                    className='py-3 px-7 border-2 border-teal-400 text-xl rounded-xl  mt-7  bg-transparent placeholder:text-white' type='password' placeholder='enter password' /
                >
                <button className='py-3 px-4 bg-slate-800 mt-6 rounded-lg'>login</button>
            </form>
        </div>
    )
}


export default Login
