import React from "react";
import { Link } from "react-router-dom";
import perthBanner from "../assets/OD_x_Perth_Header_banner.jpg";
import navLogo from "../assets/navLogo.png";
const Navbar = () => {
  return (
    <header className="bg-white h-auto sm:h-[196px] lg:h-[95px] border-b border-[#E3E3E3] drop-shadow-xl flex justify-center items-start min-h-[95px] sm:min-h-full">
      <nav className="max-w-[1170px] lg:flex bg-white sm:bg-transparent">
        <Link to={"https://www.batikair.com.my/"} className="px-[15px] block  ">
          <img
            src={navLogo}
            className="w-[555px] h-[70px] max-xl:w-[455px] max-xl:h-[58.2px] max-lg:w-[720px] max-lg:h-[92px] max-sm:w-full max-sm:h-full"
            alt="logo"
          />
        </Link>
        <Link
          to={"https://search.malindoair.com/od/onlineaddonbooking.aspx?t=A3#"}
          className="px-[15px] block"
        >
          <img
            src={perthBanner}
            className="w-[555px] h-[70px] max-xl:w-[455px] max-xl:h-[58.2px] max-lg:w-[720px] max-lg:h-[92px] max-sm:w-full max-sm:h-full"
            alt="banner"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
