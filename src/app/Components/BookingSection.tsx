import React from "react";

const BookingSection: React.FC = () => {
  const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold text-gray-700">Appointment Fee</h3>
      <p className="text-2xl font-semibold text-green-600">₹699.00</p>

      <div className="mt-4">
        <p className="text-gray-500 text-sm">Select your mode of session</p>
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
          {timeSlots.map((slot) => (
            <button
              key={slot}
              className="px-3 py-2 text-sm text-green-600 border border-green-600 rounded"
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded">
        Make an Appointment
      </button>
    </div>
  );
};

export default BookingSection;
