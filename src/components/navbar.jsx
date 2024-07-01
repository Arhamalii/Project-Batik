import React from "react";
import perthBanner from "../assets/OD_x_Perth_Header_banner.jpg";
import navLogo from "../assets/navLogo.png";
const Navbar = () => {
  return (
    <header className="bg-white h-[95px] border-b border-[#E3E3E3] drop-shadow-xl flex justify-center items-start">
      <nav className="max-w-[1170px] lg:flex bg-white sm:bg-transparent">
        <div className="px-[15px]">
          <img
            src={navLogo}
            className="w-[555px] h-[70px] max-xl:w-[455px] max-xl:h-[58.2px] max-lg:w-[720px] max-lg:h-[92px] max-sm:w-full max-sm:h-full"
            alt="logo"
          />
        </div>
        <div className="px-[15px]">
          <img
            src={perthBanner}
            className="w-[555px] h-[70px] max-xl:w-[455px] max-xl:h-[58.2px] max-lg:w-[720px] max-lg:h-[92px] max-sm:w-full max-sm:h-full"
            alt="banner"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
