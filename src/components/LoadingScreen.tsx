import React from "react";

interface LoadingScreenProps {
  isVisible: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999] transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src="/logo.png" alt="Avantagize Plus" className="h-12 w-auto mb-4 transition-opacity duration-700" />
      <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin transition-opacity duration-700"></div>
    </div>
  );
};
