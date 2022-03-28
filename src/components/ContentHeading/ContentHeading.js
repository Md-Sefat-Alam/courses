import React from "react";

const ContentHeading = ({ text }) => {
  return (
    <h1 className="text-2xl font-bold mt-4 mb-2 bg-gray-200 px-2 rounded capitalize">
      {text}
    </h1>
  );
};

export default ContentHeading;
