import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo component */}
        <Logo />

        {/* Footer Links */}
        <div className="flex space-x-6 text-sm mt-6 md:mt-0">
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          <a href="#terms" className="hover:text-white">Terms of Service</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Avantagize Plus. All rights reserved.
      </div>
    </footer>
  );
};
