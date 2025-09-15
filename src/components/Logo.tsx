import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* Logo image */}
      <img
        src="/logo.png"   // make sure your logo.png is in public/ or assets/
        alt="Avantagize Plus"
        className="h-8 w-auto"
      />

      {/* Brand name */}
      <span className="ml-2 font-semibold text-lg text-gray-900">
        Avantagize Plus
      </span>
    </div>
  );
};
