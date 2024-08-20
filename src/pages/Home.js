import React from "react";
import OurAim from "../components/OurAim";
import OurServices from "../components/OurServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import LatestBlog from "../components/LatestBlog";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <OurAim />
      <OurServices />
      <WhyChooseUs />
      <Testimonial />
      <LatestBlog />
    </div>
  );
}

export default Home;
