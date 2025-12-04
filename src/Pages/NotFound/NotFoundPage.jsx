import React from "react";

import NotFound from "../../assets/error-404.png";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center h-screen  px-4">
        <img
          src={NotFound}
          alt="Not Found"
          className="w-80 sm:w-96 mb-6 object-contain"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4 text-center">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mt-2 text-center max-w-md">
          The page you are looking for does not exist. It might have been
          removed or the URL might be incorrect.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
