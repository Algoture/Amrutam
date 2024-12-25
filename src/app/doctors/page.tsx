import DoctorList from "../Components/DoctorList";
import Filters from "../Components/Filters";
import SearchBar from "../Components/SearchBar";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SearchBar />
      <Filters />
      <DoctorList />
    </div>
  );
};

export default page;
