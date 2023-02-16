import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ecomUrl from "../../Components/AxiosUrl/Axios";
import { Link } from "react-router-dom";
import "./Form.css";
import { signupsuccess } from "../../Components/Toast/Toast";

export const Signup = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState("");
  const navigate = useNavigate();
  const validateForm = (email, password, name) => {
    if ((name == null) | (name == "")) {
      setNameError("Please enter your name");
    }
    if ((email == null) | (email == "")) {
      setEmailError("Please enter your email");
    }
    if ((password == null) | (password == "")) {
      setPasswordError("Please fill the password field");
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

  const adduser = (e) => {
    e.preventDefault();
    if (validateForm(email, password, name)) {
      alert("Enter valid credentials");
    } else {
      const user = { name, email, password };
      signupsuccess();
      ecomUrl
        .post("user", user)
        .then(() => {
          navigate("/userlog");
        })
        .catch(() => {
          alert("server error");
        });
    }
  };
  return (
    <>
      <div className="signup-box">
        <h1> Signup </h1>
        <form onSubmit={adduser}>
          <label htmlFor="username"> User Name </label>
          <input
            type="text"
            placeholder="Enter Name"
            id="username"
            name="username"
            data-testid="name-test"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onClick={(e) => {
              e.target.focus(setNameError(null));
            }}
          />
          <strong className="error-msg"> {nameError} </strong>
          <label> Email </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email Id "
            name="email"
            data-testid="email-test"
            onChange={(e) => setEmail(e.target.value)}
            onClick={(e) => {
              e.target.focus(setEmailError(null));
            }}
          />
          <strong className="error-msg"> {emailError} </strong>
          <label> Password</label>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={password}
            data-testid="password-test"
            onChange={(e) => setPassword(e.target.value)}
            onClick={(e) => {
              e.target.focus(setPasswordError(null));
            }}
          />
          <p onClick={() => setShow((prestate) => !prestate)}>
            <i className="fa fa-eye fa-fw" id="togglePassword" aria-hidden="true">
              {" "}
            </i>
          </p>
          <strong className="error-msg"> {passwordError} </strong>
          <button className="button" type="submit">
            SignUp
          </button>
          <Link className="login" to="/Login">
            <button className="button"> Login </button>
          </Link>
          <ul className="instruction">
            <li>
              Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special
              character !@#$%*
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};
