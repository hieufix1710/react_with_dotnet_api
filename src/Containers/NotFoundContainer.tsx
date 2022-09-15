import React from "react";

const NotFoundContainer = () => {
  return <div className="max-w-xl mx-auto h-96 w-full flex flex-col justify-center items-center">
    <span className="text-red-500">This page is not Found</span>
    <a href="/" className="text-blue-500 p-2 mt-2 border rounded-xl">Back to home</a>

  </div>;
};

export default NotFoundContainer;
