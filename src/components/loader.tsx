import React, { useEffect, useState } from "react";

const Preloader = ({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true); // Start fade-out effect

      // Wait for the fade-out animation to complete before removing the loader
      const hideLoaderTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1-second fade-out duration

      return () => clearTimeout(hideLoaderTimeout);
    }, 3000); // Adjust the preloader display time

    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#0F4878" }} // Match this color to your `bg-sky-700`
    >
      <img
        src="/images/clearzadtech.png"
        alt="Logo"
        className="w-48 h-48 animate-pulse"
      />
    </div>
  );
};

export default Preloader;
