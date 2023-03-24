import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ecomUrl from "../../Components/AxiosUrl/Axios";
import { Link } from "react-router-dom";
import "./Form.css";
import Toast from "../../Components/Toast/Toast";

export const Signup = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState("");
  const [nameValid, setNameValid] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const navigate = useNavigate();
  const validateForm = (email, password, name) => {
    if ((name == null) | (name == "")) {
      setNameError(" * Please enter your name");
    }
    if ((email == null) | (email == "")) {
      setEmailError(" * Please enter your email");
    }
    if ((password == null) | (password == "")) {
      setPasswordError(" * Please fill the password field");
      return true;
    } else if (!name.match(/^[a-zA-Z]$/)) {
      setNameValid("UserName should contain Characters with lowercase,uppercase or combination of it");
      return true;
    } else if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      setEmailValid("Enter Valid Email id", "error");
      return true;
    } else if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%*]{9,20}$/)) {
      setPasswordValid(
        "Password should have 9-20 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' ",
        "error"
      );
      return true;
    } else {
      return false;
    }
  };

  const adduser = (e) => {
    e.preventDefault();
    if (validateForm(email, password, name)) {
      // ecomUrl.get("user?email=" + email).then((res) => {
      //   if (res.data[0].email == email) {
      //     alert("Email Exists");
      //   }
      // });
      return;
    } else {
      const user = { name, email, password };
      Toast("Signup Successful", "success");
      ecomUrl
        .post("user", user)
        .then(() => {
          navigate("/login");
        })
        .catch(() => {
          Toast("Server Error", "warning");
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
              e.target.focus(setNameError(null), setNameValid(null));
            }}
          />
          <strong className="error-msg"> {nameError} </strong>
          <strong className="error-msg"> {nameValid} </strong>
          <label> Email </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email Id "
            name="email"
            data-testid="email-test"
            onChange={(e) => setEmail(e.target.value)}
            onClick={(e) => {
              e.target.focus(setEmailError(null), setEmailValid(null));
            }}
          />
          <strong className="error-msg"> {emailError} </strong>
          <strong className="error-msg"> {emailValid} </strong>
          <label> Password</label>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={password}
            data-testid="password-test"
            onChange={(e) => setPassword(e.target.value)}
            onClick={(e) => {
              e.target.focus(setPasswordError(null), setPasswordValid(null));
            }}
          />
          <p onClick={() => setShow((prestate) => !prestate)}>
            <i className="fa fa-eye fa-fw" id="togglePassword" aria-hidden="true"></i>
          </p>
          <strong className="error-msg"> {passwordError} </strong>
          <strong className="error-msg"> {passwordValid} </strong>
          <button className="button" type="submit">
            SignUp
          </button>
          <Link className="login" to="/login">
            <button className="button"> Login </button>
          </Link>
        </form>
      </div>
    </>
  );
};
