import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Form.css";
import { Link } from "react-router-dom";
import ecomUrl from "../../Components/AxiosUrl/Axios";
import Toast from "../../Components/Toast/Toast";

export default function Login() {
  const navigate = useNavigate();
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState("");

  const EmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return emailRegex.test(email);
  };
  const PasswordValid = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    CheckEmail();
    CheckPassword();
    if (EmailValid(useremail) && PasswordValid(userpassword)) {
      ecomUrl
        .get("user?email=" + useremail)
        .then((res) => {
          if (res.data[0].password == userpassword) {
            sessionStorage.setItem("id", res.data[0].id);
            sessionStorage.setItem("email", res.data[0].email);
            Toast("Login Successful", "success");
            navigate("/");
          } else {
            setError("Enter the Correct Password");
            // Toast("Please Enter Valid Credentials", "warning");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function CheckEmail() {
    if (!EmailValid(useremail)) {
      return setEmailError("Please enter valid email id");
    } else {
      return setEmailError("");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(userpassword)) {
      return setPasswordError(
        "Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
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
            value={useremail}
            data-testid="email-test"
            onChange={(e) => setUserEmail(e.target.value)}
            onClick={(e) => {
              e.target.focus(setEmailError(null));
            }}
          />
          <strong className="error-msg"> {emailError} </strong>

          <label> Password</label>
          <input
            type={show ? "text" : "password"}
            value={userpassword}
            placeholder="Enter password"
            name="password"
            data-testid="password-test"
            onChange={(e) => setUserPassword(e.target.value)}
            onClick={(e) => {
              e.target.focus(setPasswordError(null));
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
