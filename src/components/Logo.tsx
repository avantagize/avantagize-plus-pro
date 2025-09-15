import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"   // your new purple logo in public/
        alt="Avantagize Plus"
        className="h-8 w-auto"
      />
      <span className="ml-2 font-semibold text-lg text-gray-900">
        Avantagize Plus
      </span>
    </div>
  );
};
