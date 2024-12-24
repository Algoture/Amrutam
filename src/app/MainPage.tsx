import React from "react";
import SearchBar from "./Components/SearchBar";
import Filters from "./Components/Filters";
import DoctorList from "./Components/DoctorList";

const MainPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      
      <SearchBar />
      <Filters />
      <DoctorList />
    </div>
  );
};

export default MainPage;
