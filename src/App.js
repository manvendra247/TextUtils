// import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not.
  // let myStyle={
  //   color: "white",
  //   backgroundColor:"black"
  // };
  const toggleMod = () => {
    if (mode === "light") {
      console.log(mode);
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      console.log(mode);
    }
  };
  //alert

  return (
    <>
      <Navbar
        title="text Utils"
        about="About"
        mode={mode}
        toggleMod={toggleMod}
      />
      {/* <Alert msg= {msg}></Alert> */}
      
      <div
        className="container my-3"
        // style={{ color: mode === "dark" ? "dark" : "light" }}
      >
        <TextForm heading=" Enter you text here" mode={mode} />
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
