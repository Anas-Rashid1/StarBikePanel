import React from "react";
import Search from "../../Components/Search";
import Star from "../../Assets/Review/star.jsx";

const Seprator = () => {
  return <div className="w-[100%] border-solid border-gray border-[1px]"></div>;
};

const Stars = ({ number }) => {
  let starList = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= number) {
      starList.push({ star: true });
    } else {
      starList.push({ star: false });
    }
  }

  return (
    <>
      {starList.map((item) => {
        return (
          <span className=" mr-[4px]">
            <Star color={item.star} />
          </span>
        );
      })}
    </>
  );
};

const Review = ({ Name, review, star }) => {
  return (
    <>
      <div className="p-5 pl-10 flex flex-row">
        <div className="w-[50px] h-[50px] bg-red-300 rounded-full "></div>
        <div className="ml-[1.5rem] mt-[0.9rem] font-medium text-[18px] w-[100px] overflow-hidden">
          {Name}
        </div>
        <div className=" flex flex-row ml-[9.5rem] mt-[0.9rem]">
          <Stars number={star} />
        </div>
        <div className="w-[60%] h-auto ml-[11rem] mt-[0.5rem]">
          <p className=" font-light text-[18px]">{review}</p>
        </div>
      </div>

      <Seprator />
    </>
  );
};

const data = [
  { name: "John", review: "Great product!", stars: 5 },
  { name: "Alice", review: "Average quality.", stars: 3 },
  { name: "Bob", review: "Not satisfied.", stars: 2 },
  { name: "Emily", review: "Excellent service!", stars: 5 },
  { name: "Miceakksss", review: "Could be better.", stars: 3 },
];

const FeedbackPage = () => {
  return (
    <div className="  h-full flex flex-col">
      <div>
        <Search />
      </div>
      <div className=" p-7 font-semibold text-[24px] h-full">
        <h1 className=" pl-10">Review List</h1>
        <div className=" h-[80%] rounded-lg">
          <div className=" flex flex-row  pt-10 pl-10 pr-10 font-medium text-[18px]">
            <p className=" w-[100px]">Customers </p>
            <p className="ml-[14rem]">Rating </p>{" "}
            <p className="ml-[14rem]">Review</p>{" "}
          </div>
          {data.map((item) => {
            return (
              <Review Name={item.name} review={item.review} star={item.stars} />
            );
          })}
          <Seprator />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
