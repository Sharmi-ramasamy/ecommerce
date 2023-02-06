import React from "react";
import Sdata from "./Sdata";
import "./SlideCard.css";

export const SlideCard = () => {
  return (
    <>
      {Sdata.map((value) => (
        <div className="box d_flex top" key={value.id}>
          <div className="left">
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
          </div>
          <div className="right">
            <img src={value.cover} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};
