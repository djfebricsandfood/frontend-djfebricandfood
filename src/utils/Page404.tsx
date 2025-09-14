import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      {/* 404 text */}
      <h1 className="text-[120px] font-extrabold text-gray-900">
        <span className="text-red-600">4</span>0<span className="text-red-600">4</span>
      </h1>

      {/* Message */}
      <h2 className="text-xl font-semibold text-gray-800 mt-4">
        Oops! Page not found.
      </h2>
      <p className="text-gray-500 mt-2 text-sm">
        Let’s get you to where you need to be.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition"
      >
        Back to home
      </button>
    </div>
  );
};

export default Page404;
