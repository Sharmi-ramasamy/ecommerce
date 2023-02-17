import React from "react";
import "./Category.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";

export const Category = () => {
  const [items, setItems] = useState();
  const navigate = useNavigate();
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
                <img
                  className="product-image"
                  onClick={() => navigate(`/category/${categoryItem.name}`)}
                  src={categoryItem.image}
                  alt={categoryItem.name}
                />
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
