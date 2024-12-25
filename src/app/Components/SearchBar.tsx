import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative h-52 flex flex-col items-center bg-[#EAF2EA] gap-4 py-8 overflow-hidden">
      <div className="absolute bg-[#D5E8D5] rounded-full w-[150px] h-[150px] -top-10 left-10 opacity-50 "></div>
      <div className="absolute bg-[#D5E8D5] rounded-full w-[150px] h-[150px] -bottom-20 left-32 opacity-50"></div>
      <div className="absolute bg-[#D5E8D5] rounded-full w-[150px] h-[150px] top-20 right-32 opacity-50"></div>
      <div className="absolute bg-[#D5E8D5] rounded-full w-[150px] h-[150px] -top-20 right-10 opacity-50"></div>

      <h1 className="text-2xl font-semibold text-center mb-4">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>

      <div className="relative cen gap-2 w-full px-4">
        <img src="/location.png" alt="loc" className="absolute top-2.5 left-[21rem] z-20" />
        <select className="border relative border-[#CDCDCD] rounded-md py-2 z-10 pl-8 w-fit">
          <option>Select Location</option>
        </select>
        <input
          type="text"
          placeholder="e.g. Doctor, specialization, clinic name"
          className="border border-[#CDCDCD] rounded-md p-2 w-full md:w-1/3 placeholder:text-[#7B7B7B]"
        />
        <button
          type="submit"
          className="h-5 w-5 right-[21rem] top-3 absolute fill-current"
        >
         <img src="/right.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
