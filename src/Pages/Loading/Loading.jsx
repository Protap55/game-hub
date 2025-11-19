import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-base-200">
      <span className="loading loading-spinner loading-lg text-purple-600"></span>
      <p className="mt-4 text-lg text-purple-700 font-semibold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
