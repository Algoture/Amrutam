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
      <div className="text-lg w-full p-4 bg-[#F4F7EC] flex items-center justify-between">
        <h3 className="text-lg text-gray-700">I Specialize In</h3>
      </div>
      <div className="flex space-x-4 mt-4 p-4">
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

<div className=" bg-white border border-gray-300 rounded-lg shadow-md">
  <div className="text-lg w-full p-4 bg-[#F4F7EC] flex items-center justify-between">
    <h2 className="text-lg font-semibold text-gray-800">A Little About me</h2>
    <button className="flex items-center px-3 py-1 text-sm border-2 border-[#3A643B]  rounded-lg">
      Follow +
    </button>
  </div>
  <p className="mt-3 p-4 text-[#333548] text-opacity-50 text-sm leading-relaxed">
    Hello! I am Dr. Bruce Willis, a Gynaecologist in Sanjivni Hospital, Surat.
    Love to work with all my hospital staff and senior doctors. Completed my
    graduation in Gynaecologist Medicine from the...
    <span className="text-blue-500 cursor-pointer hover:underline">
      {" "}
      Read More
    </span>
  </p>
  <div className="p-4">
    <div className="flex items-center gap-4  mt-2">
      <h3 className="text-sm font-semibold text-gray-700">Language Spoken</h3>
      <div className="cen gap-2">
        <span className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full">
          English
        </span>
        <span className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full">
          Hindi
        </span>
        <span className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full">
          Telugu
        </span>
      </div>
    </div>
  </div>
  <div className="mt-4 flex space-x-4">
    <a href="#" className="text-gray-500 hover:text-gray-800">
      {/* <i className="fab fa-facebook"></i> */}
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      {/* <i className="fab fa-instagram"></i> */}
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      {/* <i className="fab fa-youtube"></i> */}
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      {/* <i className="fab fa-twitter"></i> */}
    </a>
  </div>
</div>;
