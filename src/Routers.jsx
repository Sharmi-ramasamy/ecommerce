import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart } from './Components/Cart/Cart'
import { Category } from './Components/Category/Category'
import { Checkout } from './Components/Checkout/Checkout'
import { Successpage } from './Components/Checkout/Successpage'
import { Error } from './Components/Error/Error'
import { SubCategory } from './Components/SubCategory/SubCategory'
import Home from './Pages/Homepage/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'

export const Routing = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/category' element={<Category/>}/>
                <Route path='/category/:id' element={<SubCategory/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='*' element={<Error/>}/>
                <Route path='checkout' element={<Checkout/>}/>
                <Route path='successpage' element={<Successpage/>}/>

            </Routes>


        </>
    )
}
