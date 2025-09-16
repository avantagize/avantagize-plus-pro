import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          
          {/* Logo + Text + About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="font-semibold text-lg text-white">Avantagize Plus</span>
            </div>
            <p className="mt-4 text-sm max-w-sm text-center md:text-left">
              Helping businesses grow with innovative strategies and creative solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-purple-400">About</a></li>
                <li><a href="#services" className="hover:text-purple-400">Services</a></li>
                <li><a href="#work" className="hover:text-purple-400">Work</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
                <li><a href="#faq" className="hover:text-purple-400">FAQ</a></li>
                <li><a href="#privacy" className="hover:text-purple-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end">
            <a
              href="#booking"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              Book Now
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Schedule your free consultation today.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Avantagize Plus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};