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
          <span className="mr-[4px]">
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
      <div className="p-4 md:p-5 md:pl-10 flex flex-col md:flex-row items-center justify-center">
        <div className="-ml-12 w-[2.5rem] md:w-[5.5rem] lg:w-[4rem] xl:w-[2.5rem] 2xl:w-[2.5rem] h-[2.5rem] bg-red-300 rounded-full"></div>
        <div className="ml-[1.5rem] font-medium text-[14px] lg:text-[18px] w-[100px] overflow-hidden">
          {Name}
        </div>
        <div className="flex flex-row -ml-10 md:ml-[9.5rem] mt-[0.9rem]">
          <Stars number={star} />
        </div>
        <div className="md:w-[60%] px-6 sm:p-0 text-justify h-auto -ml-10 md:ml-[8rem] mt-[0.5rem]">
          <p className="font-light text-[14px] lg:text-[18px] xl:ml-4">
            {review}
          </p>
        </div>
      </div>

      <Seprator />
    </>
  );
};

const data = [
  {
    name: "John",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    stars: 5,
  },
  { name: "Alice", review: "Average quality.", stars: 3 },
  { name: "Bob", review: "Not satisfied.", stars: 2 },
  { name: "Emily", review: "Excellent service!", stars: 5 },
  { name: "Miceakksss", review: "Could be better.", stars: 3 },
];

const FeedbackPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <Search />
      </div>
      <div className="p-0 md:p-7 font-semibold text-[18px] md:text-[24px] h-full">
        <h1 className="pl-10 md:-ml-8 2xl:ml-6">Review List</h1>
        <div className=" h-[80%] rounded-lg">
          <div className=" flex flex-col md:flex-row pt-10 border-solid border-gray border-b-2  md:pl-2 lg:pl-20 pr-10 font-medium text-[18px]">
            <p className="w-[100px] lg:-ml-[4rem] xl:-ml-[4rem] 2xl:-ml-[1rem]">
              Customers{" "}
            </p>
            <p className="ml-0 md:ml-[10rem] lg:ml-[12rem] xl:ml-[14rem] 2xl:ml-[14rem]"></p>{" "}
            <p className="ml-0 md:ml-[16rem] lg:ml-[14rem] xl:ml-[14rem] 2xl:ml-[16rem]">
              Review
            </p>{" "}
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
