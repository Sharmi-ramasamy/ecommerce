// import './App.css';
import { useState } from "react";
import { Routing } from "../../ecommerce/src/Routers";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
