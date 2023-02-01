import React from 'react'
import './Cart.css'

export const Cart = () => {
    

    return (
        <>
            <div className='cart-items'>
                <h2 className='cart-items-header'> Cart Items </h2>
                <div>

                    <div className='cart-items-list'>
                        <div className='cart-items-name'> Name </div>
                        <div className='cart-items-function'>
                            <button className='cart-items-add'> + </button>
                            <button className='cart-items-remove'> - </button>
                        </div>
                    </div>
                </div>

                <div className='cart-items-total-price-name'>
                    Total price
                </div>

            </div>
        </>
    )
}

