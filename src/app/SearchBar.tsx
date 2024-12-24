import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <select className="border rounded-md p-2 w-full md:w-1/4">
        <option>Select Location</option>
        {/* Add more options here */}
      </select>
      <input
        type="text"
        placeholder="e.g. Doctor, specialization, clinic name"
        className="border rounded-md p-2 w-full md:w-3/4"
      />
      <button className="bg-green-700 text-white py-2 px-4 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
