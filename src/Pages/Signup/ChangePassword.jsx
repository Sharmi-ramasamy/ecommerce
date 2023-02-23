import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ecomUrl from "../../Components/AxiosUrl/Axios";
import Toast from "../../Components/Toast/Toast";

export const ChangePassword = () => {
  const userId = sessionStorage.getItem("id");
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // eslint-disable-next-line no-unused-vars
  // const [regError, setregError] = useState(null);
  const [nameValid, setNameValid] = useState("");
  const [newPasswordValid, setNewPasswordValid] = useState("");
  const navigate = useNavigate();
  const [confirmPasswordValid, setConfirmPasswordValid] = useState("");
  const [show, setShow] = useState("");
  useEffect(() => {
    ecomUrl
      .get(`user/${userId}`)
      .then((res) => {
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changepassword = (e) => {
    e.preventDefault();
    if ((name == null) | (name == "")) {
      setNameError(" * Please enter your name");
      // return true;
    }
    if ((newPassword == null) | (newPassword == "")) {
      setNewPasswordError(" * Please enter new password");
      // return true;
    }
    if ((confirmPassword == null) | (confirmPassword == "")) {
      setConfirmPasswordError(" * Re-Enter the New Password");
      // return true;
    } else if (!name.match(/^[a-zA-Z]{8,20}$/)) {
      setNameValid("UserName should contain Minimum 8 Characters with lowercase,uppercase or combination of it");
      return true;
    } else if (!newPassword.match(/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/)) {
      setNewPasswordValid(
        "Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
      );
      return true;
    } else if (!confirmPassword.match(/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/)) {
      setConfirmPasswordValid(
        "Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
      );
      return true;
    } else if (confirmPassword == newPassword) {
      let password = confirmPassword;
      const user = { name, email, password };
      ecomUrl.put("user/" + userId, user).then(() => {
        Toast("Password Changed Successfully", "success");
      });
      navigate("/");
    } else {
      Toast("New Password and Confirm Password Does not Match. Re-Enter it Correctly", "error");
    }
    // } else if {
    //   setregError(
    //     "Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
    //   );
    // }
  };

  return (
    <div className="change-box">
      <h3> Change Password </h3>
      <form onSubmit={changepassword}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          data-testid="name-test"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onClick={(e) => {
            e.target.focus(setNameError(null), setNameValid(null));
          }}
        />
        {/* <strong className="error-msg">{nameError && <p>{nameError}</p>}</strong> */}
        <strong className="error-msg"> {nameError} </strong>
        <strong className="error-msg"> {nameValid} </strong>
        <label>New Password</label>
        <input
          type={show ? "text" : "password"}
          placeholder="Enter New Password"
          data-testid="password-test"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          value={newPassword}
          onClick={(e) => {
            e.target.focus(setNewPasswordError(null), setNewPasswordValid(null));
          }}
        />
        <p onClick={() => setShow((prestate) => !prestate)}>
          <i className="fa fa-eye fa-fw" id="togglePassword" aria-hidden="true"></i>
        </p>
        {/* <strong className="error-msg">{regError && <p>{regError}</p>}</strong> */}
        <strong className="error-msg"> {newPasswordError} </strong>
        <strong className="error-msg"> {newPasswordValid} </strong>
        <label>Confirm Password</label>
        <input
          type={show ? "text" : "password"}
          placeholder="Re-Enter New Password"
          value={confirmPassword}
          data-testid="confirmPassword-test"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          onClick={(e) => {
            e.target.focus(setConfirmPasswordError(null), setConfirmPasswordValid(null));
          }}
        />
        <p onClick={() => setShow((prestate) => !prestate)}>
          <i className="fa fa-eye fa-fw" id="togglePassword" aria-hidden="true"></i>
        </p>
        {/* <strong className="error-msg">{regError && <p>{regError}</p>}</strong> */}
        <strong className="error-msg"> {confirmPasswordError} </strong>
        <strong className="error-msg"> {confirmPasswordValid} </strong>
        <input type="submit" value="Save Changes" className="button"></input>
      </form>
    </div>
  );
};
