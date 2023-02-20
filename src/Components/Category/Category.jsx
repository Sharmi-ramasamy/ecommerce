import React from "react";
import "./Category.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";
import { Link } from "react-router-dom";

export const Category = () => {
  const [items, setItems] = useState();
  // const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    ecomUrl.get("Category").then((response) => {
      setItems(response.data);
    });
  }, [params]);

  return (
    <>
      <div className="container">
        {items &&
          items.map((categoryItem) => (
            <div key={categoryItem.id} className="procard">
              <div>
                <Link to={`/category/${categoryItem.name}`}>
                  <img src={categoryItem.image} alt="" className="product-image" />
                </Link>

                {/* <img
                  className="product-image"
                  onClick={() => navigate(`/category/${categoryItem.name}`)}
                  src={categoryItem.image}
                  alt={categoryItem.name}
                /> */}

                {/* <a
                  href={`/category/${categoryItem.name}`}
                  target="_self"
                  // className="product-image"
                  // onClick={() => navigate(`/category/${categoryItem.name}`)}
                  // src={categoryItem.image}
                  alt={categoryItem.name}
                >
                  <img className="product-image" src={categoryItem.image}></img>
                </a> */}
              </div>

              <div>
                <h3 className="product-info"> {categoryItem.name} </h3>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
