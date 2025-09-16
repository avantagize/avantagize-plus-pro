import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* Logo image */}
      <img
        src="/logo.png"
        alt="Avantagize Plus"
        className="h-6 w-auto sm:h-8" 
      />

      {/* Brand text */}
      <span className="ml-2 font-semibold text-base sm:text-lg text-gray-900">
        Avantagize Plus
      </span>
    </div>
  );
};
