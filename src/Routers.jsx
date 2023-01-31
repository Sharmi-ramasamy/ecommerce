import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Category } from './Components/Category/Category'
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


            </Routes>


        </>
    )
}
