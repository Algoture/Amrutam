import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="cen flex-col bg-[#EAF2EA] gap-4 py-8">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>
      <div className="cen gap-2 w-full">
        <select className="border border-[#CDCDCD] rounded-md p-2 w-fit">
          <option>Select Location</option>
        </select>
        <input
          type="text"
          placeholder="e.g. Doctor, specialization, clinic name"
          className="border border-[#CDCDCD] rounded-md p-2 w-full md:w-1/3 placeholder:text-[#7B7B7B]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
