import React from "react";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";

const DoctorProfile: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      <Profile />

      <main className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
        {/* Profile Section */}

        <div className="p-6 flex flex-col lg:flex-row ">
          {/* Right Column: Booking Section */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-700">Appointment Fee</h3>
            <p className="text-2xl font-semibold text-green-600">₹699.00</p>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Select your mode of session
              </p>
              <div className="flex space-x-4 mt-2">
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded">
                  In-Clinic
                </button>
                <button className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded">
                  Video
                </button>
                <button className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded">
                  Chat
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Pick a time slot</p>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"].map(
                  (slot) => (
                    <button
                      key={slot}
                      className="px-3 py-2 text-sm text-green-600 border border-green-600 rounded"
                    >
                      {slot}
                    </button>
                  )
                )}
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded">
              Make an Appointment
            </button>
          </div>
        </div>

        {/* Specializations Section */}
        {/* <div className="p-6 border-t">
          <h3 className="text-lg font-bold text-gray-700">I Specialize In</h3>
          <div className="flex space-x-4 mt-4">
            {["Women's Health", "Skin Care", "Immunity", "Hair Care"].map(
              (specialty) => (
                <span
                  key={specialty}
                  className="px-3 py-2 bg-green-100 text-green-700 rounded"
                >
                  {specialty}
                </span>
              )
            )}
          </div>
        </div> */}

        {/* Work Experience Section */}
        {/* <div className="p-6 border-t">
          <h3 className="text-lg font-bold text-gray-700">
            My Work Experience
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <span>Midtown Medical Clinic (2016-Present)</span>
              <span className="text-sm text-gray-500">Senior Doctor</span>
            </li>
            <li className="flex justify-between">
              <span>Midtown Medical Clinic (2010-2015)</span>
              <span className="text-sm text-gray-500">Senior Doctor</span>
            </li>
          </ul>
        </div> */}

        {/* Reviews Section */}
        {/* <div className="p-6 border-t">
          <h3 className="text-lg font-bold text-gray-700">
            Featured Reviews (102)
          </h3>
          <div className="mt-4 space-y-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="border p-4 rounded">
                  <p className="text-gray-700">
                    Might be early to confirm, but yes I can see noticeable
                    difference in my hairfall. Will write again after using it
                    for longer periods.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    - Alicent Hightower, 20 January 2023
                  </p>
                </div>
              ))}
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default DoctorProfile;
