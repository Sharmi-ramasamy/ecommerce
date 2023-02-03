import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()

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
        console.log('logout');
        if (sessionStorage.getItem("email")) {
            sessionStorage.clear()
            alert('Logout Successful')
            navigate('/category')
        }
        else {
            navigate('/home')
        }
    }
const store=sessionStorage.getItem('email')
    return (
        <header className='headers'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        E-Commerce Shop
                    </Link>
                </h1>
            </div>

            <div className='headers-links'>

                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>

                    {/* <li>
                    <Link to='/category'> Category </Link>
                </li> */}


                    <li>
                        <Link to='/category'> Category </Link>
                    </li>

                    <li>
                        <Link to='/cart' className='cart' title='Add to cart'>
                            <i className='fas fa-shopping-cart' />
                            {/* <span className='cart-length'> 
                            {cartItems.length ===0 ?  "" : cartItems.length}
                        </span> */}
                        </Link>
                    </li>

                    <li>
                     { store===null? <Link to='/login'> Login </Link>:<Link to='/logout'> <i className="fa-solid fa-gear"></i> </Link>} 
                      
                    </li>

                    {/* <li>
                        <Link to='/' className='logout' title='Logout' onClick={handleClick}>
                            <i className="fa fa-sign-out-alt" />
                        </Link>
                    </li> */}

                </ul>



            </div>
        </header>
    )
}
