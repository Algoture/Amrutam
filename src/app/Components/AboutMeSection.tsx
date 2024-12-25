import React from "react";
import { FbIcon, InstaIcon, XIcon, YtIcon } from "./Icons";

const AboutMeSection = () => {
  return (
    <div className=" bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="text-lg w-full p-4 grad flex items-center justify-between">
        <h2 className="text-lg text-gray-800">A Little About me</h2>
        <button className="flex items-center px-3 py-1 text-sm border-2 border-[#3A643B]  rounded-lg">
          Follow +
        </button>
      </div>
      <p className="mt-3 p-4 text-[#333548] text-opacity-50 text-sm leading-relaxed">
        Hello! I am Dr. Bruce Willis, a Gynaecologist in Sanjivni Hospital,
        Surat. Love to work with all my hospital staff and senior doctors.
        Completed my graduation in Gynaecologist Medicine from the...
      </p>
      <div className="w-full flex justify-between underline items-center px-4 gap-2 text-nowrap">
        <div className="bg-gray-400 w-full h-[0.5px]"></div>
        Read More
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4  mt-2">
          <h3 className="text-sm font-semibold text-gray-700">
            Language Spoken
          </h3>
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
      <div className="m-4 flex space-x-4">
        <a href="#" className="socialDiv">
          <FbIcon width={25} height={25} />
        </a>
        <a href="#" className="socialDiv">
          <InstaIcon width={25} height={25} />
        </a>
        <a href="#" className="socialDiv">
          <YtIcon width={25} height={25} />
        </a>
        <a href="#" className="socialDiv">
          <XIcon width={25} height={25} />
        </a>
      </div>
    </div>
  );
};

export default AboutMeSection;
