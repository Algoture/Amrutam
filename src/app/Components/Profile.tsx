const Profile = () => {
  return (
    <section className="relative m-8 border-2 border-[#D8D8D8] rounded-lg pt-20">
      <img
        src="/banner.png"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-20 h-28 object-cover"
      />
      <div className="w-full bg-fl max-w-7xl mx-auto pb-4 md:px-8 relative">
        <div className="flex items-center justify-center sm:justify-start ">
          <img
            src="/Profile.png"
            alt="Doctor"
            className="w-28 h-28 rounded-full z-30 border-4 border-white object-cover"
          />
        </div>
        <div className="flex ml-32 -mt-14 flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left ">
          <div >
            <div className="cen gap-1">
              <h3 className="font-bold text-xl text-gray-900">
                Dr. Bruce Willis
              </h3>
              <img src="/Tick.png" alt="" className="size-5" />
            </div>
            <p className="text-base text-act">Gynecologist</p>
            <div className="cen sm:justify-start gap-1 mt-1">
              <p className="cen text-lg  font-semibold">4.2</p>
              <div className="cen">
                {Array.from({ length: 5 }).map((_, i) => {
                  return <img key={i} src="/stars.png" alt="stars" />;
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            {[
              { label: "Followers", value: "850" },
              { label: "Following", value: "18K" },
              { label: "Posts", value: "250" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-4 sm:mt-0 py-3 px-6 bg-act text-white rounded-lg shadow-md ">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
