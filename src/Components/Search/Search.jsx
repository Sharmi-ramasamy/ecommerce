/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import ecomUrl from '../AxiosUrl/Axios'

export const Search = () => {
const [item,setItem]=useState([])
const [name,setName]=useState('')
    useEffect(()=>{
        ecomUrl.get("ProductItems")
        .then((response)=>{
            setItem(response.data)
        })
    },[])
  return (
    <>
      <div id="search-container">
        <input value={name} id="search-input" placeholder="Search product" onChange={e=>setName(e.target.value)}/>
        {/* <button id="search"> Search </button> */}
        </div>
    {item.map((e,i)=>{
        return (
            <div key={i}>
                {e.name.includes(name)?e.name:""}
            </div>
        )
    })}

    </>
  )
}

