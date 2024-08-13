import React from "react";

const OurServices = () => {
  const services = [
    {
      icon: "https://casumityadav.com/wp-content/uploads/2024/02/Untitled-design-1-150x150.png.webp",
      title: "Income Tax Filling",
      description:
        "Easy and fast income tax return filing starting at just Rs. 199/-",
    },
    {
      icon: "https://casumityadav.com/wp-content/uploads/2024/02/Untitled-design-2-150x150.png.webp",
      title: "GST Services",
      description:
        "Register for GST and file returns Starting from only Rs. 299/-",
    },
    {
      icon: "https://casumityadav.com/wp-content/uploads/2024/02/Untitled-design-3-150x150.png.webp",
      title: "Company Registration",
      description:
        "Register your company quickly and effortlessly from only Rs. 499/- onward!",
    },
    {
      icon: "https://casumityadav.com/wp-content/uploads/2024/02/Untitled-design-3-150x150.png.webp",
      title: "Annual Filling",
      description: "Easy and fast Annual filing starting at just Rs. 999/-",
    },
    {
      icon: "https://casumityadav.com/wp-content/uploads/2024/02/Untitled-design-6-150x150.png.webp",
      title: "Registration Service",
      description:
        "Easy and fast Registration Services starting at just Rs. 199/-",
    },
    // {
    //   icon: "",
    //   title: "How Can We Assist You",
    //   description: "Quick and reliable company registration",
    // },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className=" flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold text-center text-[#160c51]">
            Our Services
          </h2>
        </div>
        <div className=" w-full flex justify-center mb-6">
          <div className="w-3/12 border-t-0 border-4 border-l-0 border-r-0 border-yellow-400 h-4"></div>
        </div>
        <h2 className="font-bold text-2xl text-[#281c73] mb-16">
          India's Best Service Providers Are:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-7/12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          <div className=" py-6 shadow-md text-center border-[0.7vw] border-[#281c73] bg-[#241966]">
            <div className="">
              <div className="text-4xl mb-4 h-24  flex justify-center"></div>
              <h3 className="text-2xl p-4  font-bold mb-2 text-white">
                How Can We Assist You ?
              </h3>
              <h1 className="text-xl text-white">
                Get in touch with our experts for more information about our
                services.
              </h1>
            </div>

            <button className="border-2 bg-white border-white mt-6 rounded w-full">
              <button className=" bg-white text-[#281c73] font-bold text-2xl py-6 rounded">
                +91-8851505094
              </button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className=" py-6 shadow-md text-center border-[0.7vw] border-[#281c73] bg-[#dadfff] group">
    <div className="hover:text-blue-400 gst">
      <div className="text-4xl mb-4 h-48  flex justify-center">
        <img
          className="h-44 transition-all duration-300 group-hover:h-48"
          src={icon}
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2575fc]">
        {title}
      </h3>
    </div>

    <p className="text-xl">{description}</p>
    <button className="border-2 border-white mt-6 rounded">
      <button className=" bg-[#281c73] text-white px-6 py-3 rounded">
        Click Here
      </button>
    </button>
  </div>
);

export default OurServices;
