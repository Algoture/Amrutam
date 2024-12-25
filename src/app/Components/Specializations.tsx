import React from "react";

const Specializations: React.FC = () => {
  const specialties = [
    { name: "Women's Health", img: "women.png" },
    { name: "Skin Care", img: "skin.png" },
    { name: "Immunity", img: "immunity.png" },
    { name: "Hair Care", img: "hair.png" },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="text-lg w-full p-4 grad flex items-center justify-between">
        <h3 className="text-lg text-gray-700">I Specialize In</h3>
      </div>
      <div className="flex space-x-4 mt-2 p-4">
        {specialties.map((sp, i) => (
          <div key={i} className="px-3 py-2  text- cen flex-col">
            <img src={`${sp.img}`} alt={sp.name} />
            {sp.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specializations;

