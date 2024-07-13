import React, { useEffect } from "react";

const Toast = ({ toastMessage, isVisible, setIsVisible }) => {
  useEffect(() => {
    // This will hide the toast message on page refresh
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <div className="flex bg-[#F1F1F1]">
      {isVisible && (
        <div className="max-w-[1140px] bg-[#fbe4c1] border-[#dc8500] border-[1px] mx-auto my-2 text-[#a52700] p-1 px-4 inline-block mb-2 float-left w-full shadow-sm rounded-md text-center text-sm">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Toast;
