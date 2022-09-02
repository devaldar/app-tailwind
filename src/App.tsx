import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Exams } from "components/Exams";
import { Services } from "components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero name="home" />
      <Exams />
      <Services />
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
