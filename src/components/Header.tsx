import React from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Brand Name */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-purple-600">Services</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#work" className="hover:text-purple-600">Work</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};
