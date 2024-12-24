import React from "react";

const Reviews: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold text-gray-700">
        Featured Reviews (102)
      </h3>
      <div className="mt-4 space-y-4">
        {[1, 2].map((_, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="text-gray-700">
              Might be early to confirm, but yes I can see noticeable difference
              in my hairfall.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              - Alicent Hightower, 20 January 2023
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
