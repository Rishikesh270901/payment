import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Navbar = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="bg-custom-beige h-14 shadow-md flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="md:hidden text-gray-700 text-2xl">
          <i className="fas fa-bars" />
        </button>
        <h1 className="font-bold text-lg md:text-xl ml-4">Care Customer Portal</h1>
      </div>
      <div className="hidden md:flex flex-grow justify-center space-x-4">
        <a className="text-gray-700 hover:text-blue-500 font-medium" href="#">Link 1</a>
        <p className="text-gray-700">Customer Name</p>
        <p className="text-gray-700">Customer Email</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={toggleProfileMenu} className="text-gray-700 text-2xl">
            <i className="fas fa-user-circle" aria-hidden="true"></i>
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-custom-beige shadow-md rounded-lg">
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Link 1</a>
              <p className="block px-4 py-2 text-gray-700">Customer Name</p>
              <p className="block px-4 py-2 text-gray-700">Customer Email</p>
            </div>
          )}
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-700 text-2xl">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-14 right-0 w-full bg-custom-beige shadow-md flex flex-col items-center md:hidden">
          <a className="text-gray-700 hover:text-blue-500 font-medium py-2" href="#">Link 1</a>
          <p className="text-gray-700 py-2">Customer Name</p>
          <p className="text-gray-700 py-2">Customer Email</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
