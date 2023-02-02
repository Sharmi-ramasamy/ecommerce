import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Cart.css'

export const Cart = () => {

    const [getProduct, setGetProduct] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await axios.get("http://localhost:4042/AddToCart")
        setGetProduct(response.data)

    }

    const increaseProduct = (productItem) => {
        axios.put("http://localhost:4042/AddToCart/" + productItem.id, {
            "productid": productItem.id,
            "category": productItem.category,
            "SubCategory": productItem.SubCategory,
            "name": productItem.name,
            "price": productItem.price,
            "desc": productItem.desc,
            "image": productItem.image,
            "email": sessionStorage.getItem('email'),
            "quantity": productItem.quantity + 1,
            "value": productItem.price
        })
        setTimeout(() => {
            loadData();
        }, 500)
    }

    const decreaseProduct = (productItem) => {
        axios.put("http://localhost:4042/AddToCart/" + productItem.id, {
            "productid": productItem.id,
            "category": productItem.category,
            "SubCategory": productItem.SubCategory,
            "name": productItem.name,
            "price": productItem.price,
            "desc": productItem.desc,
            "image": productItem.image,
            "email": sessionStorage.getItem('email'),
            "quantity": productItem.quantity == 1 ? 1 : productItem.quantity - 1,
            "value": productItem.price
        })
        setTimeout(() => {
            loadData();
        }, 500)
    }

    const removeProduct = (productItem) => {
        axios.delete("http://localhost:4042/AddToCart/" + productItem.id)
        setTimeout(() => {
            loadData();
        }, 500)
    }

    const clearCart = () => {
        getProduct.filter((e) => {
            if (sessionStorage.getItem('email') === e.email) {
                return e
            }

        }).map((e) => {
            axios.delete("http://localhost:4042/AddToCart/" + e.id)
        })
        setTimeout(() => {
            loadData();
        }, 500)
    }

    const TotalPrice = getProduct.reduce((price, value) => price + value.price * value.quantity, 0);
    return (
        <>

            <div className='cart-items'>
                <h2 className='cart-items-header'> Cart Items </h2>
                <div className='cart-length'>
                    {getProduct.length === 0 && (
                        <div className='cart-items-empty'> Cart is Empty. </div>

                    )}
                </div>
                <div className='clear-cart'>
                    {
                        getProduct.length >= 1 && (
                            <button className='clear-cart-button' onClick={() => clearCart()}> Clear Cart </button>
                        )
                    }
                </div>

                <div>
                    {getProduct.filter((e) => {
                        if (sessionStorage.getItem("email") == e.email) {
                            return e
                        }
                    }).map((value) => (

                        <div key={value.id} className='cart-items-list'>
                            <img className='cart-items-image' src={value.image} alt={value.name} />
                            <div className='cart-items-name'> {value.name} </div>
                            <div className='cart-items-function'>
                                <button className='cart-items-increase' onClick={() => increaseProduct(value)}> + </button>
                                <button className='cart-items-decrease' onClick={() => decreaseProduct(value)}> - </button>
                                <button className='cart-items-remove' onClick={() => removeProduct(value)}> Remove </button>
                            </div>
                            <div className='cart-items-price'>
                                {value.quantity} * <i className="fa-solid fa-rupee-sign"> {value.price} </i>
                                <br />
                                Price: <i className="fa fa-rupee">     {value.quantity * value.price} </i>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='cart-items-total-price-name'>
                    Total Price: <i className="fa-solid fa-rupee-sign"> {TotalPrice} </i>
                </div>

            </div>

        </>
    )
}

