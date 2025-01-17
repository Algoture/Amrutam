"use client";
import React, { useState } from "react";

const BookingSection: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState("Video");
  const [selectedDate, setSelectedDate] = useState("Mon, 10 Oct");
  const [selectedSlot, setSelectedSlot] = useState("");

  const dates = [
    { day: "Mon, 10 Oct", slots: 10 },
    { day: "Tue, 11 Oct", slots: 2 },
    { day: "Wed, 12 Oct", slots: 5 },
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:15 PM",
  ];

  const handleModeChange = (mode: string) => {
    setSelectedMode(mode);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleSlotChange = (slot: string) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="p-6 rounded-lg border border-[#E8E8E8] h-fit max-w-md mx-auto">
      <div className="border border-[#E2E2E2] rounded-xl flex justify-between p-2">
        <h3 className="text-lg font-bold text-gray-700">Appointment Fee</h3>
        <p className="text-xl font-semibold text-act">₹699.00</p>
      </div>
      <div className="mt-4">
        <p className="my-4 text-sm font-bold">Select your mode of session</p>
        <div className="flex w-full justify-evenly gap-2 mt-2">
          {[
            { label: "In-Clinic", value: "In-Clinic", time: "45 Mins" },
            { label: "Video", value: "Video", time: "45 Mins" },
            { label: "Chat", value: "Chat", time: "10 Mins" },
          ].map((mode) => (
            <div
              key={mode.value}
              onClick={() => handleModeChange(mode.value)}
              className={`flex flex-col cursor-pointer border-[#3A643B]  px-4 py-2 rounded-xl border border-opacity-50 text-center font-medium text-sm ${
                selectedMode === mode.value
                  ? "bg-[#F2FBF2] border border-[#3A643B] "
                  : "text-green-600"
              }`}
            >
              <p
                className={`cen gap-1 text-nowrap {${
                  selectedMode === mode.value
                    ? "text-[#3A643B]"
                    : "border-[#E5E5E5] text-[#1F1F1F]"
                }`}
              >
                {mode.label}{" "}
                {selectedMode === mode.value && <img src="/done.png" className="size-4" />}
              </p>
              <p className="text-[#606060]">{mode.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="font-bold text-sm">Pick a time slot</p>
        <div className="flex w-full justify-evenly gap-2 mt-2">
          {dates.map((date) => (
            <button
              key={date.day}
              onClick={() => handleDateChange(date.day)}
              className={`cen flex-col text-nowrap cursor-pointer border-[#3A643B] w-fit  p-3 rounded-xl border border-opacity-50 text-center font-medium text-sm ${
                selectedDate === date.day
                  ? "bg-[#F2FBF2] border text-act border-[#3A643B] "
                  : ""
              }`}
            >
              <div>{date.day}</div>
              <div className="text-xs font-normal">
                <span
                  className={`${date.slots <= 2 ? "text-red-500" : ""} ${
                    date.slots == 5 ? "text-[#F1B93A]" : ""
                  }`}
                >
                  {date.slots} slot{date.slots > 1 ? "s" : ""}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => handleSlotChange(slot)}
              className={`px-2 py-4 text-sm rounded-2xl border text-center font-medium ${
                selectedSlot === slot
                  ? "bg-act text-white"
                  : "border-[#EBEBEB] "
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button
        className={`w-full mt-6 px-4 py-2 bg-act text-white rounded text-center font-medium ${
          selectedSlot ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!selectedSlot}
      >
        Make an Appointment
      </button>
    </div>
  );
};

export default BookingSection;
