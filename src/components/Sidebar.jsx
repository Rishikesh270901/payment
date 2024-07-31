import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-gray-200 transform transition-transform md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-64 md:border-r md:border-gray-300`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <button
            className="text-gray-200 md:hidden text-2xl"
            onClick={toggleSidebar}
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <nav className="mt-4">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-800 text-gray-200"
          >
            Claims
          </a>
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 p-4">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
