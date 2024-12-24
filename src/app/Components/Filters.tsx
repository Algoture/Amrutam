import React from "react";

const Filters: React.FC = () => {
  const filters = ["Hair care", "Female", "₹0-₹500", "Hindi"];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <div className="w-full flex items-center justify-evenly my-2">
        <select className="border rounded-md px-3 py-2 w-fit bg-[#F3F3F3]">
          <option>Expertise</option>
        </select>
        <select className="border rounded-md px-3 py-2 w-fit bg-[#F3F3F3]">
          <option>Gender</option>
        </select>
        <select className="border rounded-md px-3 py-2 w-fit bg-[#F3F3F3]">
          <option>Fees</option>
        </select>
        <select className="border rounded-md px-3 py-2 w-fit bg-[#F3F3F3]">
          <option>Languages</option>
        </select>
        <select className="border rounded-md px-3 py-2 w-fit bg-[#DCEEDC]">
          <option>All Filters</option>
        </select>
      </div>
      {/* {filters.map((filter, index) => (
        <span
          key={index}
          className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
        >
          {filter}
        </span>
      ))} */}
    </div>
  );
};

export default Filters;
