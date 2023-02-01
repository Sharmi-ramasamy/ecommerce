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

const categoryName=params.id;
const [categoryname,setcategoryname]=useState([]);
const [getproduct,setGetproduct]=useState([]);
  return (
    <>
{/* {categoryName} */}
{/* {categoryname} */}
<div className="wrapper">
<div>
    {items.filter((categoryItem)=>{
        if(categoryName==categoryItem.category){
            return categoryItem
        }
    }).map((val)=>(<div key={val.id}> 
    <button id="buttons" onClick={()=>setcategoryname(val.subcategory)}>{val.subcategory}</button></div>))}

</div>
     
       <div className='products'>

            {getproduct.filter((subcategoryitem)=>{if(categoryname==subcategoryitem.SubCategory){
                return subcategoryitem
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
