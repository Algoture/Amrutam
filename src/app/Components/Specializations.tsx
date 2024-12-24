import React from "react";

const Specializations: React.FC = () => {
  const specialties = ["Women's Health", "Skin Care", "Immunity", "Hair Care"];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold text-gray-700">I Specialize In</h3>
      <div className="flex space-x-4 mt-4">
        {specialties.map((specialty) => (
          <span
            key={specialty}
            className="px-3 py-2 bg-green-100 text-green-700 rounded"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Specializations;
