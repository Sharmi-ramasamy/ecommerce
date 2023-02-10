/* eslint-disable prettier/prettier */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import { Category } from "./Components/Category/Category";
import { Error } from "./Components/Error/Error";
import { Navbar } from "./Components/Navbar/Navbar";
import { Search } from "./Components/Search/Search";
import { SubCategory } from "./Components/SubCategory/SubCategory";
// import { Toast } from "./Components/Toast/Toast";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import { ChangePassword } from "./Pages/Signup/ChangePassword";
import Signup from "./Pages/Signup/Signup";

export const Routing = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<SubCategory />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path='/search' element={<Search/>}/>
      </Routes>

    </>
  );
};
