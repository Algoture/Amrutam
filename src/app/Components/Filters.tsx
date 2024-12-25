import React from "react";
import { CloseIcon } from "./Icons";

const Filters: React.FC = () => {
  const filters = ["Hair care", "Female", "₹0-₹500", "Hindi"];

  return (
    <div className="flex flex-wrap gap-2 mt-4 px-6">
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
      <div className="flex gap-3 my-2 w-full justify-end">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="bg-[#EAF2EA] cen px-3 py-2 gap-2 float-end rounded-full text-sm"
          >
            {filter}
            <CloseIcon height={15} width={15} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
