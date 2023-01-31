import React from 'react'
import './SubCategory.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const SubCategory = ({handleAddProduct}) => {
// const getItems=productItems.filter(proitem=>proitem.category==category && proitem) 

const [items,setItems]=useState([]);
const params=useParams()
useEffect(() => {
 loaddata();
  
    // console.log(response.data)
    
},[])

const loaddata=async()=>{
const resp= await axios.get("http://localhost:4042/subcategory")
setItems(resp.data)
const response= await axios.get("http://localhost:4042/ProductItems")
setGetproduct(response.data)
}

const catego=params.id;
const [catname,setcatname]=useState("Dress");
const [getproduct,setGetproduct]=useState([]);
  return (
    <>
{/* {catego} */}
{/* {catname} */}
<div className="wrapper">
<div>
    {items.filter((e)=>{
        if(catego==e.category){
            return e
        }
    }).map((val)=>(<div key={val.id}> 
    <button id="buttons" onClick={()=>setcatname(val.name)}>{val.name}</button></div>))}

</div>
     
       <div className='products'>

            {getproduct.filter((e)=>{if(catname==e.SubCategory){
                return e
            }}).map((productItem)=>(
                <div key={productItem.id} className='productcards'>
                    <div>
                        <img className='products-images' src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className='product-name'> {productItem.name} </h3>
                   </div>
                   <div className='product-price'> $ {productItem.price} </div>

                   <div className='product-details'> {productItem.desc} </div><br/>
                   
                  <div className='product-rating'> 
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                   <div>
                       <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}> Add to Cart </button>
                   </div>
              
                </div>
            ))}

       </div>
       </div>

    </>
  )
}
