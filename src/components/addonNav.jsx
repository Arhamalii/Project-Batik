import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { addonNavLinks } from "../utils/constant";
const AddonNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const hanldeScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <>
      <div className="sm:hidden">
        {!active ? (
          <IoMenu
            className="bg-[#9d2f6c] text-white absolute text-[40px] top-0 right-0 py-1 px-[6px] rounded-sm mt-1 mr-1"
            onClick={() => setActive(!active)}
          />
        ) : (
          <IoClose
            className="bg-[#9d2f6c] text-white absolute text-[40px] top-0 right-0 py-1 px-[6px] rounded-sm mt-1 mr-1"
            onClick={() => setActive(!active)}
          />
        )}
      </div>
      <div
        className={`bg-custom-pruple-gradient  ${
          !active && "hidden"
        } min-h-[50px] sm:block`}
      >
        <div className="lg:max-w-[970px] xl:max-w-[1140px] min-h-full mx-auto lg:px-5 xl:px-0 ">
          <ul className="links  sm:flex items-center justify-center lg:justify-start min-h-[50px]">
            {addonNavLinks.map((link, i) => (
              <li className="text-center" key={i}>
                <Link
                  to={link.path}
                  className="min-h-[50px] block hover:bg-[rgba(132,23,65,0.5)]"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddonNav;
