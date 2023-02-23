import React from "react";
import "../../Pages/Signup/Form.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import ecomUrl from "../AxiosUrl/Axios";
import Toast from "../../Components/Toast/Toast";

export const Checkout = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const [validName, setValidName] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [validAddress, setValidAddress] = useState("");
  const [validState, setValidState] = useState("");
  const [validCity, setValidCity] = useState("");
  const [validZip, setValidZip] = useState("");
  const navigate = useNavigate();
  const validateForm = (email, name, address, state, city, zip) => {
    if ((name == null) | (name == "")) {
      setNameError(" * Please enter your name");
      // return true;
    }
    if ((email == null) | (email == "")) {
      setEmailError(" * Please enter your email");
      // return true;
    }
    if ((address == null) | (address == "")) {
      setAddressError(" * Please enter your address");
      // return true;
    }
    if ((city == null) | (city == "")) {
      setCityError(" * Please enter your city");
      // return true;
    }
    if ((state == null) | (state == "")) {
      setStateError(" * Please enter your state");
      // return true;
    }
    if ((zip == null) | (zip == "")) {
      setZipError(" * Please enter your zipcode");
      return true;
    } else if (!name.match(/^[a-zA-Z]{3,20}$/)) {
      setValidName(" * Name should contain combination of uppercase and lowercase");
      return true;
    } else if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      setValidEmail("wrong email", "error");
      return true;
    } else if (!address.match(/^[a-zA-Z ]{3,10}$/)) {
      setValidAddress("No special characters allowed");
      return true;
    } else if (!city.match(/^[a-zA-Z]{3,20}$/)) {
      setValidCity("City should contain only alphabets");
      return true;
    } else if (!state.match(/^[a-zA-Z]{3,20}$/)) {
      setValidState("Alphabets only allowed");
      return true;
    } else if (!zip.match(/^[0-9]{5,6}$/)) {
      setValidZip("Numbers only allowed");
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(email, name, address, state, city, zip)) {
      return;
    } else {
      const userdetails = { name, email, address, state, city, zip };
      ecomUrl
        .post("CheckoutDetails", userdetails)
        .then(() => {
          navigate("/successpage");
          Toast("Checkout Successful", "success");
        })
        .catch(() => {
          Toast("Server Error", "error");
        });
    }
  };

  return (
    <>
      <div className="checkout-box">
        <form onSubmit={handleSubmit}>
          <h3>Billing Address</h3>
          <label htmlFor="firstname">
            <i className="fa fa-user"></i> Full Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Full Name"
            value={name}
            data-testid="name-test"
            onChange={(e) => setName(e.target.value)}
            onClick={(e) => {
              e.target.focus(setNameError(null), setValidName(null));
            }}
          />
          <strong className="error-msg"> {nameError} </strong>
          <strong className="error-msg"> {validName} </strong>
          <label>
            <i className="fa fa-envelope"></i> Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email Address"
            data-testid="email-test"
            onChange={(e) => setEmail(e.target.value)}
            onClick={(e) => {
              e.target.focus(setEmailError(null), setValidEmail(null));
            }}
          />
          <strong className="error-msg"> {emailError} </strong>
          <strong className="error-msg"> {validEmail} </strong>
          <label>
            <i className="fa fa-address-card"></i> Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            data-testid="address-test"
            onChange={(e) => setAddress(e.target.value)}
            onClick={(e) => {
              e.target.focus(setAddressError(null), setValidAddress(null));
            }}
          />
          <strong className="error-msg"> {addressError} </strong>
          <strong className="error-msg"> {validAddress} </strong>
          <label>
            <i className="fa fa-institution"></i> City
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            data-testid="city-test"
            onChange={(e) => setCity(e.target.value)}
            onClick={(e) => {
              e.target.focus(setCityError(null), setValidCity(null));
            }}
          />
          <strong className="error-msg"> {cityError} </strong>
          <strong className="error-msg"> {validCity} </strong>
          <label>
            <i className="fas fa-city"></i> State
          </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={state}
            data-testid="state-test"
            onChange={(e) => setState(e.target.value)}
            onClick={(e) => {
              e.target.focus(setStateError(null), setValidState(null));
            }}
          />
          <strong className="error-msg"> {stateError} </strong>
          <strong className="error-msg"> {validState} </strong>
          <label>
            <i className="fa-solid fa-location-pin"></i> Zip
          </label>
          <input
            type="text"
            name="zip"
            placeholder="Zipcode"
            data-testid="zip-test"
            onChange={(e) => setZip(e.target.value)}
            onClick={(e) => {
              e.target.focus(setZipError(null), setValidZip(null));
            }}
          />
          <strong className="error-msg"> {zipError} </strong>
          <strong className="error-msg"> {validZip} </strong>
          <button className="button" type="submit">
            Continue to Checkout
          </button>

          <p> * Only Cash on Delivery Available</p>
        </form>
      </div>
    </>
  );
};
