import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const EmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return emailRegex.test(email);
  };

  const PasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/;
    return passwordRegex.test(password);
  };

  const NameValid = (name) => {
    const nameRegex = /^[a-zA-Z]{8,20}$/;
    return nameRegex.test(name);
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  //   const [isLoggedin, setIsLoggedin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = { name, email, password };
    axios
      .post("http://localhost:4042/user", user)
      .then(() => {
        if (user) {
          // setIsLoggedin(true)
          // sessionStorage.setItem("id", res.data[0].id)
          // sessionStorage.setItem('email', res.data[0].email)
          navigate("/login");
          alert("Signup successful");
        }
      })
      .catch(() => {
        alert("Signup Failed!Try Again");
      });
    CheckEmail();
    CheckPassword();
    CheckName();
  };

  function CheckEmail() {
    if (!EmailValid(email)) {
      return setEmailError("Please enter valid email id");
    } else {
      return setEmailError(" ");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(password)) {
      return setPasswordError(
        "Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
      );
    } else {
      return setPasswordError(" ");
    }
  }

  function CheckName() {
    if (!NameValid(name)) {
      return setNameError(
        "UserName should contain Minimum 8 Characters with smallcase or lowercase"
      );
    } else {
      return setNameError(" ");
    }
  }

  return (
    <>
      <div className="signup-box">
        <h1> Sign Up </h1> <br />
        <h4> Take a minute to signup </h4>
        <form onSubmit={handleSubmit}>
          <label> Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter your name"
            required
          />
          <strong className="error-msg"> {nameError} </strong>
          <label> Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Enter email address"
            required
          />
          <strong className="error-msg"> {emailError} </strong>
          <label> Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter password"
            required
          />
          <strong className="error-msg"> {passwordError} </strong>
          {Error && <p style={{ color: "blue" }}> {Error} </p>}
          <br /> <br /> <br />
          <button className="button" type="submit">
            {" "}
            Signup{" "}
          </button>
          <Link className="signup" to="/login">
            <button className="button"> Login </button>
          </Link>
        </form>{" "}
        <br />
      </div>
    </>
  );
}
