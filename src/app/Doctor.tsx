import React from "react";
import Navbar from "./Components/Nav";
import Profile from "./Components/Profile";
import BookingSection from "./Components/BookingSection";
import Specializations from "./Components/Specializations";
import WorkExperience from "./Components/WorkExperience";
import Reviews from "./Components/Reviews";
import AboutMeSection from "./Components/AboutMeSection";

const DoctorProfile: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-6 space-y-6">
        <Profile />
        <div className="grid grid-cols-1 m-8 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <AboutMeSection />
            <Specializations />
            <WorkExperience />
            <Reviews />
          </div>
          <BookingSection />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
