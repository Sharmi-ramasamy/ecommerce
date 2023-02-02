import React from 'react'
import './HomeCategory.css'

export const HomeCategory = () => {
  const data = [
    {
      catImg: './Assets/HomeCategory/Cat1.png',
      catName: 'Fashion'
    },
    {
      catImg: './Assets/HomeCategory/Cat2.png',
      catName: "Electronic",
    },
    {
      catImg: './Assets/HomeCategory/Cat5.png',
      catName: "Gifts",
    },
    {
      catImg: './Assets/HomeCategory/Cat6.png',
      catName: "Music",
    },
    {
      catImg: './Assets/HomeCategory/Cat7.png',
      catName: "Health & Beauty",
    },
    {
      catImg: './Assets/HomeCategory/Cat9.png',
      catName: "Baby Toys",
    },
    {
      catImg: './Assets/HomeCategory/Cat10.png',
      catName: "Groceries",
    },
  ]

  return (
    <>

      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.catImg} alt='' />
              <span>{value.catName}</span>
            </div>
          )
        }
        )}

      </div>
    </>
  )
}
