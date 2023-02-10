import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = (productItem) => {
  const navigate = useNavigate();

  // const handleChange = () => {
  //     console.log('done');
  //     if (sessionStorage.getItem("email")) {
  //         navigate('/category')
  //     }
  //     else {
  //         navigate('/login')
  //     }
  // }

  const handleClick = () => {
    if (sessionStorage.getItem("email")) {
      sessionStorage.clear();
      alert("Logout Successful");
      navigate("/");
    } else {
      navigate("/logout");
    }
  };

  const store = sessionStorage.getItem("email");
  return (
    <header className="headers">
      <div>
        <h1>
          <Link to="/" className="logo">
            E-Commerce Shop
          </Link>
        </h1>
      </div>

      <div className="headers-links">
        <ul>
          <li>
            <Link to="/search"> Search </Link>
          </li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/category"> Category </Link>
          </li>

          <li>
            <Link to="/cart" className="cart" title="Add to cart">
              <i className="fas fa-shopping-cart" />
              <span className="cart-length">
                {productItem.length === 0 ? "" : productItem.length}
              </span>
            </Link>
          </li>

          <li>
            {store === null ? (
              <Link to="/login"> Login </Link>
            ) : (
              <Link
                to="/"
                className="logout"
                title="Logout"
                onClick={handleClick}
              >
                <i className="fa fa-sign-out-alt" />
              </Link>
            )}
          </li>

          <li>
            {store === null ? (
              ""
            ) : (
              <Link to="/changepassword">Change Password</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};
