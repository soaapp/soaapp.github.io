import React, { useEffect, useState } from "react";

const Preloader = ({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <div className="bg-[#142E47] fixed inset-0 bg-white flex justify-center items-center z-50">
      <img
        src="/images/zadtech.png"
        alt="Logo"
        className="w-48 h-48 animate-pulse"
      />
    </div>
  );
};

export default Preloader;
