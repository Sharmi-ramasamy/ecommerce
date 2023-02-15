/* eslint-disable prettier/prettier */
import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import ecomUrl from "../AxiosUrl/Axios";
import { signupsuccess } from "../Toast/Toast";

export const Checkout =()=>{
    const [name,setName]=useState("")
    const [nameError,setNameError]=useState("")
    const [email,setEmail]=useState("")
    const [emailError,setEmailError]=useState("")
    const [setcredError]=useState("")
    const [address,setAddress]=useState("")
    const [addressError,setAddressError]=useState("")
    const [state,setState]=useState("")
    const [stateError,setStateError]=useState("")
    const [city,setCity]=useState("")
    const [cityError,setCityError]=useState("")
    const [zip,setZip]=useState("")
    const [zipError,setZipError]=useState("")
    const navigate=useNavigate()
    const validateForm=(email,name,address,state,city,zip) =>{
        if(name==null | name==''){
            setNameError('Please enter your name')
        }
        if(email==null | email=='') {
            setEmailError('Please enter your email')
        }
        if(address==null | address=='') {
            setAddressError('Please enter your address')
        }
        if(city==null | city=='') {
            setCityError('Please enter your city')
        }
        if(state==null | state=='') {
            setStateError('Please enter your state')
        }
        if(zip==null | zip=='') {
            setZipError('Please enter your zipcode')
        }
        if (
            email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
        ) {
            return false;
        } else {
            return true;
        }   
    };

    const handleSubmit=(e)=>{
    e.preventDefault();
    if (validateForm(email,name,address,state,city,zip)) {
        alert('Enter valid credentials')
    } else {
        const userdetails={name,email,address,state,city,zip}
       signupsuccess();
        ecomUrl.post('CheckoutDetails',userdetails).then(()=>{
            navigate('/successpage')
        }).catch(()=>{
            alert('server error')
        })
    }
    };

    return (
        <>
         <div className="checkout-box">
             <form onSubmit={handleSubmit}>
                 <h3>Billing Address</h3>
                 <label>
                     {" "}
                     <i className="fa fa-user"></i> Full Name
                </label>
                 <input
                    type="text"
                    name="firstname"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onClick={(e)=>{
                        e.target.focus(setcredError(null),setEmailError(null))
                    }}
                />
                <strong className="error-msg"> {nameError} </strong>

                <label>
                    {" "}
                    <i className="fa fa-envelope"></i> Email
                </label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={(e)=>{
                        e.target.focus(setcredError(null),setNameError(null))
                    }}
                />
                <strong className="error-msg"> {emailError} </strong>

                <label>
                    {" "}
                    <i className="fa fa-address-card"></i> Address
                </label>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    onClick={(e)=>{
                        e.target.focus(setcredError(null),setAddressError(null))
                    }}
                />
                 <strong className="error-msg"> {addressError} </strong>

                <label>
                    {" "}
                    <i className="fa fa-institution"></i> City
                </label>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onClick={(e)=>{
                        e.target.focus(setcredError(null),setCityError(null))
                    }}
                />
                <strong className="error-msg"> {cityError} </strong>
                <label> State </label>
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onClick={(e)=>{
                        e.target.focus(setcredError(null),setStateError(null))
                    }}
                />
                 <strong className="error-msg"> {stateError} </strong>
                <label> Zip </label>
                <input
                    type="text"
                    name="zip"
                    placeholder="Zipcode"
                    onChange={(e) => setZip(e.target.value)}
                    onClick={(e)=>{
                        e.target.focus(setcredError(null),setZipError(null))
                    }}
                />
                 <strong className="error-msg"> {zipError} </strong>
                <button className="buttons" type="submit">
                    Continue to Checkout
                </button>

                <p> * Only Cash on Delivery Available</p>
            </form>
        </div>
        
        </>
    )
}