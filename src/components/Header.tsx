import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 sm:space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-purple-600">
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Animated Overlay with Blur */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-in Menu (from left) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Animated Logo Section */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 transform transition-all duration-500 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <Logo />
          <button
            className="text-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Staggered Nav Links */}
        <nav className="flex flex-col py-6 px-6 text-gray-700 font-medium space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-purple-600 transform transition-all duration-300 ${
                isOpen
                  ? `translate-x-0 opacity-100 delay-[${(index + 1) * 100}ms]`
                  : "-translate-x-4 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#booking"
            className={`mt-4 px-4 py-2 rounded-lg bg-purple-600 text-white text-center hover:bg-purple-700 transition transform duration-300 ${
              isOpen
                ? "translate-x-0 opacity-100 delay-[500ms]"
                : "-translate-x-4 opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};
