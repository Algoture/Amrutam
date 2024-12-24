import React from "react";
import { CommentIcon, EduIcon, LangIcon, MedicineIcon } from "./Icons";

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
    <div className="bg-cardsBg  rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="cen flex-col">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="relative size-28 z-10 rounded-full mb-4"
        />
        <div className="cen -mt-7 bg-slate-800 z-20 text-white rounded-full px-2">
          <p className="">{rating}</p>
          <img src="/stars.png" alt="" />
        </div>
      </div>
      <span className="text-3xl text-[#2E2F2E] font-semibold">{name}</span>
      <div className="mt-2">
        <p className="cardtxt">
          <MedicineIcon height={20} width={20} />
          {specialization}
        </p>
        <p className="cardtxt">
          <EduIcon height={20} width={20} />
          {experience} years of Experience
        </p>
        <p className="cardtxt">
          <CommentIcon height={20} width={20} />
          Speaks: {languages.join(", ")}
        </p>
      </div>
      <div className="flex gap-2 justify-between mt-4 w-full">
        <div className="feeDiv">
          <span className="text-sm font-semibold">Video Consultation</span>
          <span className="fee">₹{videoConsultationFee}</span>
        </div>
        <div className="feeDiv">
          <span className="text-sm font-semibold">Chat Consultation</span>
          <span className="fee">{chatConsultationFee}</span>
        </div>
      </div>
      <button className="mt-4 w-full border-opacity-40 bg-white text-act border-2 border-[#3A643B] py-2 rounded-lg">
        View Profile
      </button>
      <button className="mt-2 w-full  text-white py-4 rounded-lg bg-act">
        Book a consultation
      </button>
    </div>
  );
};

export default DoctorCard;
