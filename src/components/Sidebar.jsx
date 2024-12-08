import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import React from "react";
import { CiCirclePlus, CiCircleCheck } from "react-icons/ci";

const Sidebar = ({ showNav, onClose }) => {
  const router = useRouter(); // Initialize useRouter

  const isActive = (path) => router.pathname === path; // Check if the route matches

  return (
    <aside
      className={`fixed lg:relative z-50 lg:z-auto ${
        showNav ? "translate-x-0" : "-translate-x-full"
      } transform transition-transform duration-300 ease-in-out text-black  min-h-screen w-56 py-4 pl-10 pr-0 border-r border-gray-300`}
    >
      {/* Close Button for Small Screens */}
      <button
        className="lg:hidden text-black text-2xl mb-4 focus:outline-none"
        onClick={onClose}
        aria-label="Close Sidebar"
      >
        &times;
      </button>
      <div className="flex items-center mb-8 gap-2">
        <img src={"https://admin.foreverbuy.in/assets/logo-BI5h54w2.png"} className="w-4/5 h-16" />
      </div>
      <nav className="space-y-4">
        {/* Main Menu */}
        <Link
          href="/add"
          className={`flex items-center flex-row-reverse text-xl font-medium block p-2 rounded rounded-r-none border border-r-0 border-gray-300 ${
            isActive("/add") ? "bg-blue-500 text-white" : "bg-[#ffebf5]"
          }`}
        >
          <CiCirclePlus className="ml-2 text-2xl" />
          اضافة عنصر
        </Link>
        <Link
          href="/view-items"
          className={`flex items-center flex-row-reverse text-xl font-medium block p-2 rounded rounded-r-none border border-r-0 border-gray-300 ${
            isActive("/view-items")
              ? "bg-blue-500 text-white"
              : "bg-transparent"
          }`}
        >
          <CiCircleCheck className="ml-2 text-2xl" />
          عرض العناصر
        </Link>
        <Link
          href="/dashboard"
          className={`flex items-center flex-row-reverse text-xl font-medium block p-2 rounded rounded-r-none border border-r-0 border-gray-300 ${
            isActive("/dashboard") ? "bg-blue-500 text-white" : "bg-transparent"
          }`}
        >
          <CiCircleCheck className="ml-2 text-2xl" />
          عرض الطلبات
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
