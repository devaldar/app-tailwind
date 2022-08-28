import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero name="home" />
      <div className="h-[400vh]"></div>
    </>
  );
};

export default App;
