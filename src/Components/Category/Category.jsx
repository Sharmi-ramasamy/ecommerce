import React from 'react'
import './Category.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

export const Category = () => {
 
  const navigate = useNavigate();
  const [items, setItems] = useState();
  const params = useParams()
  useEffect(() => {
    axios.get("http://localhost:4042/Category")
      .then(response => {
        setItems(response.data);
        // console.log(response.data)
      })
  }, [params])

  return (
    <>

      <div className='container'>

        {items && items.map((categoryItem) => (
          <div key={categoryItem.id} className='procard'>

            <div>
              <img className='product-image' onClick={() => navigate(`/category/${categoryItem.name}`)} src={categoryItem.image} alt={categoryItem.name} />
            </div>

            <div>
              <h3 className='product-info'> {categoryItem.name} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}