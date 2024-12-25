import React from "react";
const WorkExperience: React.FC = () => {
  const experiences = [
    {
      place: "Midtown Medical Clinic",
      years: "2016-Present",
      role: "Senior Doctor",
    },
    {
      place: "Midtown Medical Clinic",
      years: "2010-2015",
      role: "Senior Doctor",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="w-full p-4 grad">
        <h3 className="text-lg text-gray-700 font-medium">
          My Work Experience
        </h3>
      </div>
      <p className="font-semibold text-[#3A643B] p-4 text-lg">
        I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
      </p>
      <div className="w-full flex justify-between underline items-center pl-4 pr-40 gap-2 text-nowrap">
        <div className="bg-[#D1D5D1] w-full h-[0.5px]"></div>
      </div>
      <ul className="mt-4 p-4 space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className="flex items-center space-x-4">
            <div className="flex items-center justify-center bg-[#F7F7FC] rounded-lg p-3">
              <img src="/home.png" alt="clinic-icon" className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800 font-medium">{exp.place}</h4>
              <p className="text-sm text-[#333548] text-opacity-50 font-medium">{exp.role}</p>
            </div>
            <span className="text-sm text-[#333548] text-opacity-70">{exp.years}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WorkExperience;
