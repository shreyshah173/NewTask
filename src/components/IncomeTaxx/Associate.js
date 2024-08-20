import React, { useEffect, useRef } from "react";
import Heading from "../Heading";

const Associate = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstChild;
        carouselRef.current.appendChild(firstChild);
      }
    }, 2000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Heading title={"Associated With"} />
      </div>
      <div className="overflow-hidden w-[70vw] m-4 ">
        <div
          ref={carouselRef}
          className="flex items-center justify-between space-x-8 animate-scroll overflow-hidden"
        >
          <img
            src="https://cdn.angelone.in/kyc/images/logo.svg"
            alt="AngelOne"
            className="h-16 w-auto"
          />
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png"
            alt="ICICI Bank"
            className="h-16 w-auto"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg"
            alt="Instamojo"
            className="h-16 w-auto"
          />
          <img
            src="https://upstox.com/app/themes/upstox/dist/img/logo/desktop-logo.svg"
            alt="Upstox"
            className="h-16 w-auto"
          />
          <img
            src="https://www.instamojo.com/wp-content/uploads/2021/04/instamojo_logo.png.webp"
            alt="Google Partner"
            className="h-16 w-auto bg-blue-950"
          />
          {/* Repeat logos for seamless scrolling */}
          <img
            src="https://logowik.com/content/uploads/images/google-partner.jpg"
            alt="AngelOne"
            className="h-16 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Associate;
