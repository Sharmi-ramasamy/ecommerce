import React from 'react'
import './Home.css'
import { HomeCategory } from './HomeCategory'
import { Slider } from './Slider'


const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <HomeCategory />
          <Slider />
        </div>
      </section>
    </>
  )
}


export default Home