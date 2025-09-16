import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* Logo image */}
      <img
        src="/logo.png"       // Make sure logo.png is in your /public folder
        alt="Avantagize Plus"
        className="h-8 w-auto"
      />

      {/* Brand text */}
      <span className="ml-2 font-semibold text-lg text-gray-900">
        Avantagize Plus
      </span>
    </div>
  );
};
