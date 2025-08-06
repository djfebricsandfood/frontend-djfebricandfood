import React from "react";
import { CalendarDays } from "lucide-react";
import blog from "../../assets/Blog.jpg"

// Function to format today's date
const getToday = () => {
  const today = new Date();
  const options = { day: "numeric", month: "long" };
  return today.toLocaleDateString("en-US", options);
};

const BlogHeader = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={blog}
        alt="Supply Chain"
        className="w-full h-full object-top object-cover absolute inset-0"
      />



      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 text-white">
        {/* Date */}
        <div className="flex items-center space-x-2 mb-3">
          <CalendarDays className="w-6 h-6 text-red-500" />
          <span className="bg-white text-red-600 px-3 py-1 text-xs font-semibold rounded">
            {getToday()}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug max-w-2xl">
          How technology can help redraw the supply chain map
        </h1>
      </div>
    </section>
  );
};

export default BlogHeader;
