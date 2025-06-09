import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<>
    <nav className="bg-[#090909] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#BCA14F]">MyBrand</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-[#BCA14F] font-semibold hover:font-bold duration-200 hover:scale-110">Home</a>
            <a href="#about" className="text-[#BCA14F] font-semibold hover:font-bold duration-200 hover:scale-110">Music</a>
            <a href="#services" className="text-[#BCA14F] font-semibold hover:font-bold duration-200 hover:scale-110">Shop</a>
            <a href="#contact" className="text-[#BCA14F] font-semibold hover:font-bold duration-200 hover:scale-110">Contact</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#BCA14F] focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-[#BCA14F] shadow">
          <a href="#home" className="block text-[#BCA14F] hover:font-bold duration-200 ">Home</a>
          <a href="#about" className="block text-[#BCA14F] hover:font-bold duration-200 ">About</a>
          <a href="#services" className="block text-[#BCA14F] hover:font-bold duration-200 ">Services</a>
          <a href="#contact" className="block text-[#BCA14F] hover:font-bold duration-200 ">Contact</a>
        </div>
      )}
    <div className="h-[3px] bg-[#BCA14F] w-full" />
    </nav>

    </>
  );
};

export default Navbar;
