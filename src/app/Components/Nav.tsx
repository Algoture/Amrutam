const Nav = () => {
  return (
    <nav className="bg-[#FFF7E2] p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-10" />
        <nav className="flex space-x-6">
          <a href="#" className="navtxt">
            Home
          </a>
          <a href="#" className="navtxt">
            Find Doctors
          </a>
          <a href="#" className="navtxt">
            About Us
          </a>
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
