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
    <div className=" bg-white shadow-lg rounded-lg">
      <div className="text-lg w-full p-4 bg-[#F4F7EC] flex items-center justify-between">
        <h3 className="text-lg  text-gray-700">My Work Experience</h3>
      </div>
      <ul className="mt-4 p-4 space-y-2">
        {experiences.map((exp, index) => (
          <li key={index} className="flex justify-between">
            <span>
              {exp.place} ({exp.years})
            </span>
            <span className="text-sm text-gray-500">{exp.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
