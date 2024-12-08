import Link from "next/link";
import React from "react";
import { CiCirclePlus, CiCircleCheck } from "react-icons/ci";

const Sidebar = ({ showNav, onClose }) => {
  return (
    <aside
      className={`fixed lg:relative z-50 lg:z-auto ${
        showNav ? "translate-x-0" : "-translate-x-full"
      } transform transition-transform duration-300 ease-in-out text-black  min-h-screen w-56 py-4 pl-10 pr-0 border-r border-gray-300`}
    >
      {/* Close Button for Small Screens */}
      <button
        className="lg:hidden text-white text-2xl mb-4 focus:outline-none"
        onClick={onClose}
        aria-label="Close Sidebar"
      >
        &times;
      </button>
      <div className="flex items-center mb-8 gap-2">
        <h2 className="text-xl font-semibold">لوحة التحكم</h2>
      </div>
      <nav className="space-y-4">
        {/* Main Menu */}
        <Link
          href="/dashboard"
          className="flex items-center flex-row-reverse text-xl font-medium block p-2 rounded rounded-r-none border border-r-0 border-gray-300"
        >
          <CiCirclePlus className="ml-2 text-2xl" />
          اضافة عنصر
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center flex-row-reverse text-xl font-medium block p-2 rounded rounded-r-none  border border-r-0 border-gray-300"
        >
          <CiCircleCheck className="ml-2 text-2xl" />
          عرض العناصر
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center flex-row-reverse text-xl font-medium block p-2 rounded rounded-r-none  border border-r-0 border-gray-300"
        >
          <CiCircleCheck className="ml-2 text-2xl" />
          عرض الطلبات
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
