import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ecomUrl from "../../Components/AxiosUrl/Axios";
import Toast from "../../Components/Toast/Toast";

export const ChangePassword = () => {
  const userId = sessionStorage.getItem("id");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameError, setNameError] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [regError, setregError] = useState(null);
  const navigate = useNavigate();

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
    if (!name.match(/^[a-zA-Z]{8,20}$/)) {
      setNameError("UserName should contain Minimum 8 Characters with lowercase,uppercase or combination of it");
    }
    if (
      newPassword.match(/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/) &&
      confirmPassword.match(/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/)
    ) {
      if (confirmPassword == newPassword) {
        let password = confirmPassword;
        const user = { name, email, password };
        ecomUrl.put("user/" + userId, user).then(() => {
          Toast("Password Changed Successfully", "success");
        });
        navigate("/");
      } else {
        Toast("New Password and Confirm Password Does not Match. Re-Enter it Correctly", "error");
      }
    } else {
      setregError(
        "Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' "
      );
    }
  };

  return (
    <div className="change-box">
      <h3> Change Password </h3>
      <form
        onSubmit={(e) => {
          changepassword(e);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          data-testid="name-test"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <strong className="error-msg">{nameError && <p>{nameError}</p>}</strong>
        <label>New Password</label>
        <input
          type="password"
          placeholder="Enter New Password"
          data-testid="password-test"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          value={newPassword}
        ></input>
        <strong className="error-msg">{regError && <p>{regError}</p>}</strong>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Re-Enter New Password"
          value={confirmPassword}
          data-testid="confirmPassword-test"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></input>
        <strong className="error-msg">{regError && <p>{regError}</p>}</strong>
        <input type="submit" value="Save Changes" className="button"></input>
      </form>
    </div>
  );
};
