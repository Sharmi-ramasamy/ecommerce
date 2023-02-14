/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import ecomUrl from '../../Components/AxiosUrl/Axios'
import { Link } from 'react-router-dom'
import './Signup.css'

export const AddUser = () => {
    const [userName,setUserName]=useState("")
    const [nameErr,setNameErr]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const [emailErr,setEmailErr]=useState("")
    const [userPassword,setUserPassword]=useState("")
    const [passwordErr,setPasswordErr]=useState("")
    const [credErr,setcredErr]=useState("")
    const [show,setShow]=useState("")
    const navigate=useNavigate()
    const validateForm=(email,password,name) =>{
        if(name==null | name==''){
            setNameErr('Please enter your name')
        }
        if(userEmail==null | userEmail=='') {
            setEmailErr('Please enter your email')
        }
        if(userPassword==null | userPassword=='') {
            setPasswordErr('Please fill the password field')
        }
        if (
            email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/) &&
            password.match(/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/)
        ) {
            return false;
        } else {
            return true;
        }
    };

    const adduser=(e)=>{
    e.preventDefault();
    if (validateForm(userEmail,userPassword,userName)) {
        setcredErr('Enter Valid Credentials')
    } else {
        const user={userName,userEmail,userPassword}
        alert('Signed Successfully');
        ecomUrl.post('user',user).then(()=>{
            navigate('/')
        }).catch(()=>{
            alert('server error')
        })
    }
    };
    
      return (
        <>
        <div className="signup-box">
        <h1> Login </h1>
        <form onSubmit={adduser}>
        <label htmlFor='username'> User Name </label>
          <input
            type="text"
            placeholder="Enter Name"
            id='username'
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onClick={(e)=>{
                e.target.focus(setcredErr(null),setNameErr(null))
            }}
          />
          <strong className='error-msg'> {nameErr} </strong>
          <label> Email </label>
          <input
            type="text"
            value={userEmail}
            placeholder="Enter Email Id "
            name="email"
            onChange={(e) => setUserEmail(e.target.value)}
            onClick={(e)=>{
                e.target.focus(setcredErr(null),setEmailErr(null))
            }}
          />
          <strong className="error-msg"> {emailErr} </strong>
          <label> Password</label>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            onClick={(e)=>{
                e.target.focus(setcredErr(null),setPasswordErr(null))
            }}
          />
          <strong className="error-msg"> {passwordErr} </strong>
          <button className="buttons" type="submit" >
            Login
          </button>
          <Link className="signup" to="/signup">
            <button className="buttons"> Sign Up </button>
          </Link>
          <ul className='instruction'>
            <li>
            Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character !@#$%*
            </li>
          </ul>
        </form>
      </div>
    </>
  )
}
