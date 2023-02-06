/* eslint-disable prettier/prettier */
import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ChangePassword = () => {
  useEffect(() => {
    Loaddata();
  }, []);


  const [userdata, setUserdata] = useState([]);
  const [oldpassword] = useState("");
  const store = sessionStorage.getItem("email");
  const Loaddata = async () => {
    const Response = await Axios.get("http://localhost:4042/user");
    setUserdata(Response.data);
  };

  userdata.filter((e)=>{if(e.email==store){
    oldpassword(e.password)
  }})
  
  return (
  <div>

     
  {store}
      
    </div>

  );
};
