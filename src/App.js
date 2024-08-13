import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import OurAim from "./components/OurAim";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import LatestBlog from "./components/LatestBlog";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Industries from "./components/Industries";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <OurAim />
        <OurServices />
        <WhyChooseUs />
        <Industries />
        <Testimonial />
        <LatestBlog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
