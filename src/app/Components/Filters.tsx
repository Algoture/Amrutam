import React from "react";

const Filters: React.FC = () => {
  const filters = ["Hair care", "Female", "₹0-₹500", "Hindi"];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {filters.map((filter, index) => (
        <span
          key={index}
          className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default Filters;
