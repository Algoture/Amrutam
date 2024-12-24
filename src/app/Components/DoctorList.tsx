import React from "react";
import DoctorCard from "./DoctorCard";

const DoctorList: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      videoConsultationFee: 800,
      chatConsultationFee: "Free",
      rating: 4.5,
      imageUrl: "/prerna.png",
    },
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      videoConsultationFee: 800,
      chatConsultationFee: "Free",
      rating: 4.5,
      imageUrl: "/prerna.png",
    },
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      videoConsultationFee: 800,
      chatConsultationFee: "Free",
      rating: 4.5,
      imageUrl: "/prerna.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
