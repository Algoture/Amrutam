import React from "react";

const Reviews: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="text-lg p-4 w-full bg-[#F4F7EC] font-bold text-gray-700">
        Featured Reviews (102)
      </div>
      <div className="mt-4 space-y-4 px-4 pb-4">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg flex items-start space-x-4 bg-gray-50 shadow-sm"
          >
            <img
              src="/alice.png"
              alt="Reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Alicent Hightower
                  </h4>
                  <p className="text-sm text-gray-500">
                    Consulted for Skin care
                  </p>
                </div>
                <p className="text-sm text-gray-500">20 January 2023</p>
              </div>
              <div className="mt-2 flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  return <img key={i} src="/stars.png" alt="stars" />;
                })}
              </div>
              <p className="mt-2 text-gray-700">
                Might be bit early to confirm but yes I can see noticeable
                difference in my hairfall. Will write again after using it for
                longer periods.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
