import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import DoctorList from "./DoctorList";

const MainPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>
      <SearchBar />
      <Filters />
      <DoctorList />
    </div>
  );
};

export default MainPage;
