/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
// import React, { useEffect, useState } from 'react'
// import ecomUrl from '../AxiosUrl/Axios'

// export const Search = () => {
// const [item,setItem]=useState([])
// const [name,setName]=useState('')
//     useEffect(()=>{
//         ecomUrl.get("ProductItems")
//         .then((response)=>{
//             setItem(response.data)
//         })
//     },[])
//   return (
//     <>
//       <div id="search-container">
//           <input
//             type="text"
//             value={name}
//             id="search-input"
//             placeholder="Search product"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button id="search"> Search </button>
//           {item
//             .filter((e) => {
//               if (
//                 e.name.toLowerCase().includes(name.toLowerCase()) 
//               ) {
//                 return e;
//               }
//             })
//             .map((e) => {
//               <div key={e.id} className="productcards">
//               <div>
//                 <img
//                   className="products-images"
//                   src={e.image}
//                   alt={e.name}
//                 />
//               </div>
//               <div>
//                 <h3 className="product-name"> {e.name} </h3>
//               </div>
//               <div className="product-price"> $ {e.price} </div>

//               <div className="product-details"> {e.desc} </div>
//               <br />
//               <div className="product-rating">
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//               </div>
//               <div>
//                 <button
//                   className="product-add-button"
//                   // onClick={() => addProduct(productItem)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//             })}
//         </div>
//     </>
//   )
// }



import React from 'react'
import {useState,useEffect} from 'react'
import ecomUrl from '../AxiosUrl/Axios'

export const Search =() => {

const [user,setUser]=useState([])
const [name,setName]=useState('')

useEffect (()=>{
  ecomUrl.get("ProductItems")
    .then((response)=>{
        console.log(response.data);
        setUser(response.data)
    })
},[])
    return (
        <>
        <input value={name} placeholder='Search Name' onInput={e=>setName(e.target.value)}/>
        {name.length > 0 && 
        user.map((val,i)=>{
            return(
                <div key={i}>
                    {val.name.toLowerCase().includes(val.name.toLowerCase()) ?  <img
                    src={val.image}
                    style={{ height: "500px", width: "500px" }}
                  /> : ""}
                    {/* {val.name.includes(name) ? val.name : ""} */}
                </div>
            )
        })}
        {/* {console.log(name)} */}
        
        </>
    )
}
