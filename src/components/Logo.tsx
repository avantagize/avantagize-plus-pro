import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center" role="img" aria-label="Avantagize Plus Logo">
      {/* Logo image */}
      <img
        src="/logo.png"
        alt=""   // ✅ empty alt since aria-label on wrapper announces it
        className="h-6 w-auto sm:h-8"
        loading="lazy"
      />

      {/* Brand text */}
      <span className="ml-2 font-semibold text-base sm:text-lg text-gray-900">
        Avantagize Plus
      </span>
    </div>
  );
};