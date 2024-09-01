import React, { useState } from 'react'
import { RiTwitterXLine } from 'react-icons/ri'
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant.js';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,email,password,username);
    if(isLogin){
      // login
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, {email, password},{
          headers:{
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    }else{
      // signup
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, {name, username, email, password}, {
          headers:{
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    }
  }

  
  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  }


  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-4/5'>

        <div>
          <RiTwitterXLine size={"300px"}/>
        </div>

        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now.</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "Signup"}</h1>
          <form className='flex flex-col w-3/5' onSubmit={handleSubmit}>
            {
              !isLogin && (<>
                <input type='text' placeholder='Username' value={username} onChange={(e) => {setUserName(e.target.value)}} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
                <input type='text' placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
              </>)
            }

            <input type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
            <input type='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
            <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>{isLogin ? "Login" : "Create Account"}</button>
            <h1>{isLogin ? "Do not have an account?" : "Already have an account? "}<span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'>{isLogin ?  "Signup" : "Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login 