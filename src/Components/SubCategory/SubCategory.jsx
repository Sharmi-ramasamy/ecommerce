/* eslint-disable prettier/prettier */
import React from "react";
import "./SubCategory.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ecomUrl from "../AxiosUrl/Axios";

export const SubCategory = () => {
  const [items, setItems] = useState([]);

  const params = useParams();

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    const resp = await ecomUrl.get("SubCategory");
    setItems(resp.data);
    const response = await ecomUrl.get("ProductItems");
    setGetproduct(response.data);
  };

  const addProduct = (productItem) => {
    ecomUrl.post("AddToCart", {
      productid: productItem.id,
      category: productItem.category,
      SubCategory: productItem.SubCategory,
      name: productItem.name,
      price: productItem.price,
      desc: productItem.desc,
      image: productItem.image,
      email: sessionStorage.getItem("email"),
      quantity: 1,
      value: productItem.price,
    });
    alert("Item Added to the Cart Succesfully");
  };

  const categoryName = params.id;
  const [categoryname, setcategoryname] = useState([]);
  const [getproduct, setGetproduct] = useState([]);
  // const [name, setName] = useState("");
  return (
    <>
      {/* {categoryName} */}
      {/* {categoryname} */}
      
      <div className="wrapper">
        {/* <div id="search-container">
          <input
            type="text"
            value={name}
            id="search-input"
            placeholder="Search product"
            onChange={(e) => setName(e.target.value)}
          />
          <button id="search"> Search </button>
          {getproduct
            .filter((e) => {
              if (
                e.name.toLowerCase().includes(name.toLowerCase()) 
               && e.category==categoryName
              ) {
                return e;
              }
            })
            .map((e, i) => {
              return (
                <div key={i}>
                  <img
                    src={e.image}
                    style={{ height: "500px", width: "500px" }}
                  />
                </div>
              );
            })}
        </div> */}
        <h2> Filter Products: </h2>
        <div>
          {items
            .filter((categoryItem) => {
              if (categoryName == categoryItem.category) {
                return categoryItem;
              }
            })
            .map((val) => (
              <div key={val.id}>
                <button
                  id="buttons"
                  onClick={() => setcategoryname(val.subcategory)}
                >
                  {val.subcategory}
                </button>
              </div>
            ))}
        </div>
        

        <div className="products">
          {getproduct
            .filter((subcategoryitem) => {
              if (categoryname == subcategoryitem.SubCategory) {
                return subcategoryitem;
              }
            })
            .map((productItem) => (
              <div key={productItem.id} className="productcards">
                <div>
                  <img
                    className="products-images"
                    src={productItem.image}
                    alt={productItem.name}
                  />
                </div>
                <div>
                  <h3 className="product-name"> {productItem.name} </h3>
                </div>
                <div className="product-price"> $ {productItem.price} </div>

                <div className="product-details"> {productItem.desc} </div>
                <br />
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <button
                    className="product-add-button"
                    onClick={() => addProduct(productItem)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
