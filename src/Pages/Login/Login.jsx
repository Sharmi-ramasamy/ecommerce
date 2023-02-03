import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Login() {
  
  const EmailValid = (email) =>{
     const emailRegex= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
     return emailRegex.test(email)
  
  }
  const PasswordValid=(password) => {
    const passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/
    return passwordRegex.test(password)
  }

  const navigate=useNavigate();
  const[useremail,setUserEmail] = useState("")
  const[userpassword,setUserPassword] = useState('')
  const[Error, setError] = useState('')

  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [isLoggedin,setIsLoggedin]=useState(false)

  const handleSubmit=(event) =>{
    event.preventDefault();
    axios.get("http://localhost:4042/user?email="+useremail).then((res)=>{
       if(res.data[0].password == userpassword){
        setIsLoggedin(true)
        sessionStorage.setItem("id",res.data[0].id)
        sessionStorage.setItem('email',res.data[0].email)
        // let cart=[]
        // sessionStorage.setItem('CartItems',JSON.stringify(cart));
        alert('Login successful')
        navigate('/')
       } 
       else{
        setError("Invalid credentials")
        alert('Please Enter the Valid Credentials')
        // navigate('/signup')
       }
    
    // console.log(res.data[0])
        // setIsLoggedin(true)
        // navigate("/category")
      
      
    }).catch((err)=>{console.log(err)})
    CheckEmail();
    CheckPassword();
  }

  
  function CheckEmail() {
    if (!EmailValid(useremail)) {
      return setEmailError('Please enter valid email id')
    }
    else {
      return setEmailError(" ");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(userpassword)) {
      return setPasswordError("Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' ");
    }
    else {
      return setPasswordError(" ");
    }
  }

  return (
    <>
    <div className="login-box">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
            
                <label> Email </label>
                <input type="text" placeholder="Enter Email Id " name='email' onChange={(e)=>setUserEmail(e.target.value)} required/> 
                <strong className='error-msg'> {emailError} </strong>

                <label> Password</label>
                <input type="password" placeholder="Enter password" name='password' onChange={(e)=>setUserPassword(e.target.value)}/>
                <strong className='error-msg'> {passwordError} </strong>
                {Error&& <p style={{color:'red'}}> {Error} </p>} 

                <button className='buttons' type="submit" disabled={!useremail}> Login </button> 

              <Link className='signup' to="/signup"> 
              <button className='buttons'> Sign Up </button></Link> 

            </form>
            
        </div>
         
         </>


  )
}
