const Nav = () => {
  return (
    <nav className="bg-[#FFF7E2] p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <nav className="cen gap-20">
          <img src="/logo.png" alt="logo" className="h-10" />
          <div className="cen gap-10">
            <a href="#" className="navtxt text-navtext font-medium">
              Home
            </a>
            <a href="#" className="navtxt text-act font-bold">
              Find Doctors
            </a>
            <a href="#" className="navtxt text-navtext font-medium">
              About Us
            </a>
          </div>
        </nav>
        <div>
          <button className="px-4 py-2 text-sm border border-green-600 text-act rounded-lg mr-2">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-act text-white rounded-lg">
            Sign-up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
