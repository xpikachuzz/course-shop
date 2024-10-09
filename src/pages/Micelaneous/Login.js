import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { email as setEmail } from "../../store/loginSlice"
import Secure from '../../security/Secure'

export const Login = () => {
  const dispatch = useDispatch()
  const email = useRef("")
  const password = useRef("")
  const loginState = useSelector((state) => state.loginState.email)

  const handleLogin = (e) => {
    e && e.preventDefault()
    if (email.current.value !== "" && password.current.value !== "") {
      dispatch(setEmail(email.current.value))
    }
  }

  return (
    <section className='py-10 px-10 text-left'>
      <div>
        <h1 className='text-4xl font-semibold mb-2'>Login</h1>
        {loginState && <div className='border border-dashed border-red-800 w-full sm:w-1/2'>
          <h1 className='text-4xl font-semibold mb-2 text-red-500'>Already Logged in</h1>
          <p className='text-red-500 mb-5'>Log out by clicking on your the profile icon in the top-right</p>
        </div>
        }
        <div className=''>
          <p>Email:</p>
          <input ref={email} id='email' placeholder='email' className='text-black mb-4 px-2 w-56 border border-gray-600 disabled' disabled={loginState} />
          <p>Password:</p>
          <input ref={password} placeholder='password' className='text-black mb-4 px-2 w-56 border border-gray-600' disabled={loginState} />
        </div>
        <div className='flex flex-row'>
          <button onClick={(e) => handleLogin(e)} className='p-2 px-3 border border-gray-600'>
            Submit
          </button>
          <Secure />
        </div>
      </div>
    </section>
  )
}
