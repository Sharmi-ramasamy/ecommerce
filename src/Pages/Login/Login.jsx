/* eslint-disable no-undef */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Form.css";
import { Link } from "react-router-dom";
import ecomUrl from "../../Components/AxiosUrl/Axios";
import Toast from "../../Components/Toast/Toast";

export default function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState("");

  const EmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return emailRegex.test(email);
  };
  const PasswordValid = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%*])(?=.*[A-Z])([a-zA-Z0-9!@#$%*]{9,20})$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    CheckEmail();
    CheckPassword();
    if (EmailValid(userEmail) && PasswordValid(userPassword)) {
      ecomUrl
        .get("user?email=" + userEmail)
        .then((res) => {
          if (res.data[0].email == userEmail && res.data[0].password == userPassword) {
            sessionStorage.setItem("id", res.data[0].id);
            sessionStorage.setItem("email", res.data[0].email);
            Toast("Login Successful", "success");
            navigate("/");
            // } else if (res.data[0].email !== userEmail) {
            //   setErrors("Enter the Correct Email");
          } else if (res.data[0].password != userPassword) {
            Toast("Invalid Password", "error");
          }
        })
        .catch((err) => {
          Toast("Invalid Email", "error", err);
          // console.log(err);
          // setErrors("Enter the Correct Email", err);
        });
    }
  };

  function CheckEmail() {
    if (!EmailValid(userEmail)) {
      return setEmailError("Please enter valid email id");
    } else {
      return setEmailError("");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(userPassword)) {
      return setPasswordError(
        "Password should have 9-20 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
      );
    } else {
      return setPasswordError("");
    }
  }

  return (
    <>
      <div className="login-box">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <label> Email </label>
          <input
            type="text"
            placeholder="Enter Email Id "
            name="email"
            value={userEmail}
            data-testid="email-test"
            onChange={(e) => setUserEmail(e.target.value)}
            onClick={(e) => {
              e.target.focus(setEmailError(null), setErrors(null));
            }}
          />
          <strong className="error-msg"> {emailError} </strong>
          {error && <p style={{ color: "red" }}> {errors} </p>}

          <label> Password</label>
          <input
            type={show ? "text" : "password"}
            value={userPassword}
            placeholder="Enter password"
            name="password"
            data-testid="password-test"
            onChange={(e) => setUserPassword(e.target.value)}
            onClick={(e) => {
              e.target.focus(setPasswordError(null), setError(null));
            }}
          />
          <p onClick={() => setShow((prestate) => !prestate)}>
            <i className="fa fa-eye fa-fw" id="togglePassword" aria-hidden="true"></i>
          </p>
          <strong className="error-msg"> {passwordError} </strong>
          {error && <p style={{ color: "red" }}> {error} </p>}

          <button className="button" type="submit">
            Login
          </button>

          <Link className="signup" to="/signup">
            <button className="button"> Sign Up </button>
          </Link>
        </form>
      </div>
    </>
  );
}
