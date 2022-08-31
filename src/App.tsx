import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Exams } from "components/Exams";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero name="home" />
      <Exams />
      {/* Exams Include */}
      {/* Services */}
      {/* Some Companies */}
      {/* Reviews */}
      {/* Pricing */}
      <div className="h-[400vh]"></div>
    </>
  );
};

export default App;
