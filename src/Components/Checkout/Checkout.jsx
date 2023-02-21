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
  const [setcredError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  const navigate = useNavigate();
  const validateForm = (email, name, address, state, city, zip) => {
    if ((name == null) | (name == "")) {
      setNameError("Please enter your name");
    }
    if ((email == null) | (email == "")) {
      setEmailError("Please enter your email");
    }
    if ((address == null) | (address == "")) {
      setAddressError("Please enter your address");
    }
    if ((city == null) | (city == "")) {
      setCityError("Please enter your city");
    }
    if ((state == null) | (state == "")) {
      setStateError("Please enter your state");
    }
    if ((zip == null) | (zip == "")) {
      setZipError("Please enter your zipcode");
    }
    if (email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(email, name, address, state, city, zip)) {
      Toast("Enter valid credentials", "error");
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
          <label>
            <i className="fa fa-user"></i> Full Name
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="Full Name"
            value={name}
            data-testid="name-test"
            onChange={(e) => setName(e.target.value)}
            onClick={(e) => {
              e.target.focus(setcredError(null), setEmailError(null));
            }}
          />
          <strong className="error-msg"> {nameError} </strong>

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
              e.target.focus(setcredError(null), setNameError(null));
            }}
          />
          <strong className="error-msg"> {emailError} </strong>

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
              e.target.focus(setcredError(null), setAddressError(null));
            }}
          />
          <strong className="error-msg"> {addressError} </strong>

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
              e.target.focus(setcredError(null), setCityError(null));
            }}
          />
          <strong className="error-msg"> {cityError} </strong>
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
              e.target.focus(setcredError(null), setStateError(null));
            }}
          />
          <strong className="error-msg"> {stateError} </strong>
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
              e.target.focus(setcredError(null), setZipError(null));
            }}
          />
          <strong className="error-msg"> {zipError} </strong>
          <button className="button" type="submit">
            Continue to Checkout
          </button>

          <p> * Only Cash on Delivery Available</p>
        </form>
      </div>
    </>
  );
};
