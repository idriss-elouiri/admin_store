const TopNavbar = ({ onMenuClick }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md border-b border-gray-300">
      {/* Mobile Menu Button */}
      <button
        className=" text-black text-2xl"
        onClick={onMenuClick}
        aria-label="Open Menu"
      >
        ☰
      </button>
      <button className="text-md font-semibold text-white bg-black p-2 px-4 rounded-full">
        تسجيل الخروج
      </button>
    </header>
  );
};

export default TopNavbar;
