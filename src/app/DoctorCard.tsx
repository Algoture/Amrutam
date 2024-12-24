import React from "react";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: number;
  languages: string[];
  videoConsultationFee: number;
  chatConsultationFee: string;
  rating: number;
  imageUrl: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  languages,
  videoConsultationFee,
  chatConsultationFee,
  rating,
  imageUrl,
}) => {
  return (
    <div className="bg-cardsBg rounded-lg shadow-md p-6 flex flex-col items-center">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="w-20 h-20 rounded-full mb-4"
      />
      <div className="flex items-center gap-1 mb-2">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-yellow-500 text-sm">{rating} ★</span>
      </div>
      <p className="text-sm text-gray-600">{specialization}</p>
      <p className="text-sm text-gray-600">{experience} years of Experience</p>
      <p className="text-sm text-gray-600">Speaks: {languages.join(", ")}</p>
      <div className="flex gap-2 justify-between mt-4 w-full">
        <div className="cen flex-col border p-2 border-[#3A643B] rounded-lg">
          <span className="text-sm">Video Consultation</span>
          <span className="text-sm font-semibold">₹{videoConsultationFee}</span>
        </div>
        <div className="cen flex-col border p-2 border-[#3A643B] rounded-lg">
          <span className="text-sm">Chat Consultation</span>
          <span className="text-sm font-semibold">₹{chatConsultationFee}</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-white text-act border-2 border-[#3A643B] py-2 rounded-lg">
        View Profile
      </button>
      <button className="mt-2 w-full  text-white py-2 rounded-lg bg-act">
        Book a consultation
      </button>
    </div>
  );
};

export default DoctorCard;
