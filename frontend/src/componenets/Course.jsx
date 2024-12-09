import React from "react";
import list from "../../public/list.json"; // Ensure the path is correct
import Card from "./Card";

function Course() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <h1 className="text-purple-400 text-2xl font-semibold pb-4 text-center">
        All Courses
      </h1>
      <p className="text-gray-600 text-center pb-6">
        Explore all our courses designed to help you enhance your knowledge and skills.
      </p>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {list.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Course;
