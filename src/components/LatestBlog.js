import React from "react";

const BlogCard = ({ title, description, imageUrl }) => (
  <div className="bg-blue-900 rounded-lg overflow-hidden shadow-lg p-4 group">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-56 object-cover transition-transform duration-300 group-hover:opacity-75 group-hover:rotate-3"
    />
    <div className="p-4">
      <h3 className="text-white text-xl font-bold my-8">{title}</h3>
      <p className="text-white font-semibold text-lg mb-4">{description}</p>
      <button className="bg-blue-500 group-hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Learn more
      </button>
    </div>
  </div>
);

const LatestBlog = () => {
  const blogPosts = [
    {
      title: "What is Alternative Minimum Tax?",
      description:
        "What is Alternative Minimum Tax? Table of Contents AMT – What is Alternative Minimum Tax ? The Government has put...",
      imageUrl:
        "https://casumityadav.com/wp-content/uploads/2023/12/WHAT-IS-1-1024x553.png.webp",
    },
    {
      title: "What Is Initial Public Offering (IPO)?",
      description:
        "What Is an Initial Public Offering (IPO)? Table of Contents Introduction An initial public offering (IPO) refers to the process...",
      imageUrl:
        "https://casumityadav.com/wp-content/uploads/2023/12/48.png.webp",
    },
    {
      title: "What is Tax Deduction at Source (TDS)",
      description:
        "Table of Contents What is Tax deduction at source (TDS) TDS stands for Tax Deducted at Source. It is a procedure...",
      imageUrl:
        "https://casumityadav.com/wp-content/uploads/2023/12/49-2048x1105.png.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#160c51]">
        Latest Blog
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-2/12 border-t-0 border-4 border-l-0 border-r-0 border-yellow-400 h-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
