import React from "react";
import list from "../../public/list.json"; // Ensure the path is correct

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Adjusted for better UX
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="text-purple-400 text-xl font-semibold pb-2 text-center">
        Free Offered Courses
      </h1>
      <p className="text-gray-600  text-center">
        Discover our free courses to boost your skills and knowledge.
      </p>
      {filterData.length > 0 ? (
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      ) : (
        <p className="text-red-500">No free courses available.</p>
      )}
    </div>
  );
}

export default FreeBook;
