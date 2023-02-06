import React from "react";
import { HomeCategory } from "./HomeCategory";
import { Slider } from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <div className="info"> We have the following Products:</div>
          <HomeCategory />
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Home;
