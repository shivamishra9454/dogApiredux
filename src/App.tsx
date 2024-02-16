import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { ReactPropTypes } from "react";
import Card from "./Components/card";
import User from "./Components/User";
// import Home from "./Components/Home";
// import HomeComponent from "./Components/HomeComponent";
import HomeComponent from './container/HomeContainer'

function App() {
  const name: string = "Redux App";
  return (
    <div className="App">
    <HomeComponent /> 
      {/* <Header nameValue={`${name}`} /> */}
      {/* <Card />
      <User data={{ name: "Shiva Mishra", age: 26 }} /> */}
      {/* <Home nameValue={"Hello Shiva"} /> */}
      

    </div>
  );
}

export default App;
