import React from "react";
import Heading from "../Heading";

const reviews = [
  {
    name: "Unique Guru",
    date: "2023-12-16",
    rating: 5,
    comment:
      "Maine apni income tax return file krvai hai aur inki team ne voh return 2 ghante m file krdi m sabko recommend krta hu casumit yadav ko",
  },
  {
    name: "Harpal Singh",
    date: "2023-12-15",
    rating: 5,
    comment:
      "I had a wonderful experience with sumit yadav when I incorporating my OPC their team response was very fast and they start registering my company within 2 or 3 hours, sumit yadav tax consultancy was best in delhi",
  },
  {
    name: "David Miller",
    date: "2023-12-14",
    rating: 5,
    comment:
      "recently utilized Sumit Yadav tax consultancy for my company's registration and was throughly impressed with the seamless process. Both sumit yadav & their team went above and beyond in their support, exceeding all expectations. Their professionalism and dedication are commendable. Highly recommended!",
  },
  {
    name: "hema arya",
    date: "2023-12-11",
    rating: 5,
    comment:
      "Best service provider at reasonable rates Good customer behaviour",
  },
];

const cardClasses = "bg-card p-4 rounded-lg shadow-md border border-border";
const avatarClasses =
  "bg-zinc-300 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold";
const starClasses = "text-yellow-500";
const emptyStarClasses = "text-zinc-300";
const readMoreButtonClasses = "text-primary mt-2";

const ReviewCard = ({ review }) => (
  <div className={cardClasses}>
    <div className="flex items-center mb-2">
      <div className={avatarClasses}>{review.name.charAt(0)}</div>
      <div className="ml-3">
        <h3 className="font-semibold">{review.name}</h3>
        <span className="text-muted-foreground text-sm">{review.date}</span>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(review.rating)].map((_, index) => (
        <span key={index} className={starClasses}>
          ★
        </span>
      ))}
      {[...Array(5 - review.rating)].map((_, index) => (
        <span key={index} className={emptyStarClasses}>
          ★
        </span>
      ))}
    </div>
    <p className="text-muted-foreground">{review.comment}</p>
  </div>
);

const Client = () => (
  <div>
    <div>
      <Heading title={"Client Reviews"} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-[7%] my-[2%]">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  </div>
);

export default Client;
