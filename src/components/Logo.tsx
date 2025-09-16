import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center" role="img" aria-label="Avantagize Plus Logo">
      {/* Logo image */}
      <img
        src="/logo.png"
        alt="" // ✅ decorative image, announced by aria-label instead
        className="h-6 w-auto sm:h-8"
        loading="lazy"
        decoding="async"
      />

      {/* Brand text */}
      <span className="ml-2 font-semibold text-base sm:text-lg text-gray-900">
        Avantagize Plus
      </span>
    </div>
  );
};