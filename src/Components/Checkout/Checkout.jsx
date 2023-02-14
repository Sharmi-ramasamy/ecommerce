/* eslint-disable prettier/prettier */
import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import ecomUrl from "../AxiosUrl/Axios";

export const Checkout = () => {
    const EmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        return emailRegex.test(email);
    };

    const NameValid = (name) => {
        const nameRegex = /^[a-zA-Z]{8,20}$/;
        return nameRegex.test(name);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let checkout = { name, email, address, city, state, zip };
        ecomUrl
            .post("CheckoutDetails", checkout)
            // {
            // name:name;
            // email:email;
            // address:address;
            // city:city;
            // state:state;
            // zip:zip;

            // })
            .then(() => {
                if (checkout) {
                    navigate("/successpage");
                }
            })
            .catch(() => {
                alert("Checkout Failed! Try Again.");
            });

        // CheckPassword();
        CheckName();
        CheckEmail();
    };

    // const EmailValid = (email) => {
    //     const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    //     return emailRegex.test(email)
    // }

    // const PasswordValid = (password) => {
    //     const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/
    //     return passwordRegex.test(password)
    // }

    // const NameValid = (name) => {
    //     const nameRegex = /^[a-zA-Z]{8,20}$/
    //     return nameRegex.test(name)
    // }

    function CheckEmail() {
        if (!EmailValid(email)) {
            return setEmailError("Please enter valid email id");
        } else {
            return setEmailError(" ");
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
                    onChange={(e) => setName(e.target.value)}
                    // required
                />
                <strong className="error-msg"> {nameError} </strong>

                <label>
                    {" "}
                    <i className="fa fa-envelope"></i> Email
                </label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    // required
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
                    // required
                />

                <label>
                    {" "}
                    <i className="fa fa-institution"></i> City
                </label>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    // required
                />

                <label> State </label>
                <input
                    type="text"
                    name="state"
                    placeholder="Town"
                    onChange={(e) => setState(e.target.value)}
                    // required
                />

                <label> Zip </label>
                <input
                    type="text"
                    name="zip"
                    placeholder="Zipcode"
                    onChange={(e) => setZip(e.target.value)}
                    // required
                />

                <button className="buttons" type="submit">
                    Continue to Checkout
                </button>

                <p> * Only Cash on Delivery Available</p>
            </form>
        </div>
    );
};
