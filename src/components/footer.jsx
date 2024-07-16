import React from "react";
import { LiaInstagram, LiaTwitter } from "react-icons/lia";
import { MdDoubleArrow } from "react-icons/md";
import { RiFacebookLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import malasiaICAO from "../assets/Malaysia-for-ICAO-Logo.png";
import mavcomIcon from "../assets/Mavcom-icon.jpg";
import sealImage from "../assets/seal_image.png";
import {
  aboutList,
  contactUsList,
  expirenceList,
  productList,
} from "../utils/constant";
const Footer = ({ homeFooter }) => {
  return (
    <>
      <footer className="bg-[#e4e6e9] ftrBg">
        <div className="mx-auto max-w-screen-xl space-y-8 px-[3rem] lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8  py-5 sm:grid-cols-2 lg:grid-cols-4 place-items-center sm:place-items-start">
            <div className="text-center sm:text-start">
              <p className=" text-[#333] text-[14px] font-bold">
                About Batik Air
              </p>

              <ul className="mt-2 space-y-1 text-sm">
                {aboutList.map((list, i) => (
                  <li key={i}>
                    <div className="transition-transform transform hover:translate-x-2 ease-in-out duration-500 inline-block">
                      <a href={list.path} className="text-[#333] text-[13px] ">
                        {list.text}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex mt-4 gap-x-7">
                <Link to={"https://flysmart.my/en/make-a-complaint/"}>
                  <img src={mavcomIcon} alt="mavcomIcon" className="" />
                </Link>
                <Link
                  to={
                    "https://search.malindoair.com/od/onlineaddonbooking.aspx?t=A3#"
                  }
                >
                  <img src={malasiaICAO} alt="malasiaICAO" />
                </Link>
              </div>
            </div>

            <div className="text-center sm:text-start">
              <p className=" text-[#333] text-[14px] font-bold">
                Batik Experience
              </p>

              <ul className="mt-2 space-y-1 text-sm">
                {expirenceList.map((list, i) => (
                  <li key={i}>
                    <div className="transition-transform transform hover:translate-x-2 ease-in-out duration-500 inline-block">
                      <a href={list.path} className="text-[#333] text-[13px]">
                        {list.text}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <p className=" text-[#333] text-[14px] font-bold mt-3">
                {" "}
                Product
              </p>

              <ul className="mt-2 space-y-1 text-sm">
                {productList.map((list, i) => (
                  <li key={i}>
                    <div className="transition-transform transform hover:translate-x-2 ease-in-out duration-500 inline-block">
                      <a href={list.path} className="text-[#333] text-[13px]">
                        {list.text}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-start">
              <p className=" text-[#333] text-[14px] font-bold">Contact Us</p>

              <ul className="mt-2 space-y-1 text-sm">
                {contactUsList.map((list, i) => (
                  <li key={i}>
                    <div className="transition-transform transform hover:translate-x-2 ease-in-out duration-500 inline-block">
                      <a href={list.path} className="text-[#333] text-[13px]">
                        {list.text}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-start">
              <p className=" text-[#333] text-[14px] font-bold">Latest News</p>

              <div className="mt-2 space-y-1 border-b border-[#abaaaa] border-dashed pb-1">
                <Link
                  className="flex text-[13px] text-[#333] items-center gap-x-2 mt-2"
                  to={
                    "https://www.malindoair.com/news-events/COVID19-COVID19-Countries-Travel-Restriction--Policies"
                  }
                >
                  <MdDoubleArrow className="font-normal" />
                  <span>Countries Travel Restrictions and Policies</span>
                </Link>
              </div>

              <div className="pt-[1.6em] flex  items-center sm:items-start flex-col ">
                <small className=" text-[#333] text-[0.825rem] font-medium">
                  Follow Us
                </small>
                <div className="flex text-[#222] text-[13px] gap-2 mt-2 ">
                  <Link
                    className="border border-[#333] rounded-full p-1 hover:border-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-all duration-500 ease-in-out"
                    to={"https://www.facebook.com/BatikAir.MY"}
                  >
                    <RiFacebookLine className="text-[20px]" />
                  </Link>
                  <Link
                    className="border border-[#333] rounded-full p-1 hover:border-[#517fa4] hover:bg-[#517fa4] hover:text-white transition-all duration-500 ease-in-out"
                    to={"https://instagram.com/malindoair/"}
                  >
                    <LiaInstagram className="text-[20px]" />
                  </Link>
                  <Link
                    className="border border-[#333] rounded-full p-1 hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white transition-all duration-500 ease-in-out"
                    to={"https://twitter.com/malindoair"}
                  >
                    <LiaTwitter className="text-[20px]" />
                  </Link>
                </div>
                <Link
                  to={
                    "https://sealserver.trustwave.com/cert.php?customerId=x4irdzZ9ZhnnQRKNVXfZ1abi2uw8Ww&size=105x54&style="
                  }
                >
                  <img
                    src={sealImage}
                    alt="sealImage"
                    className="max-w-[82px] max-h-[40px] opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-300 mt-[.83em]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#be1a4a] min-h-[58px] text-white text-[12px] text-center py-3 relative z-[999] lg:z-auto lg:relative lg:w-full">
          <div className="font-arial">
            <Link
              className="font-arial"
              to={"https://www.malindoair.com/about-us"}
            >
              About US |{" "}
            </Link>
            <Link
              className="font-arial"
              to={"https://www.malindoair.com/contact-us"}
            >
              Contact US |{" "}
            </Link>
            <Link
              className="font-arial"
              to={"https://www.malindoair.com/contact-us/career"}
            >
              Carrers |{" "}
            </Link>
            <Link
              className="font-arial"
              to={"https://www.malindoair.com/terms-and-conditions"}
            >
              Terms & Conditions |{" "}
            </Link>
            <Link
              className="font-arial"
              to={"https://www.malindoair.com/taxinvoice"}
            >
              Tax Invoice |{" "}
            </Link>
            <Link
              className="font-arial"
              to={"https://www.malindoair.com/privacy-policy"}
            >
              Privacy Policy |{" "}
            </Link>
            <Link className="font-arial" to={"https://www.malindoair.com/faqs"}>
              FAQ's{" "}
            </Link>
          </div>
          <p className="font-arial">
            © Copyright by Batik Air,Malaysia. All Rights Reserved. / This
            website is owned and operated by Malindo Airways Sdn Bhd (1018546-W)
          </p>

          {homeFooter ? (
            <div
              className="absolute hidden lg:block lg:-bottom-[0px]  right-0"
              bis_skin_checked="1"
            >
              <img
                src="https://d3ganl2fbgt0uf.cloudfront.net/test/images/ftr-btm.png"
                className="block max-w-full h-auto w-full"
              />{" "}
            </div>
          ) : (
            <div
              className="absolute hidden lg:block lg:-bottom-[0px]  right-0"
              bis_skin_checked="1"
            >
              <img
                src="https://d3ganl2fbgt0uf.cloudfront.net/test/images/ftr-btm.png"
                className="block max-w-full h-auto w-full"
              />{" "}
            </div>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
