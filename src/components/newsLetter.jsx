import React from "react";
import { Link } from "react-router-dom";
import signupFlight from "../assets/signup-flight.png";
const NewsLetter = () => {
  return (
    <div className="customNewsLetterBG flex justify-center items-center ">
      <div className="w-[1170px] flex flex-col md:flex-row gap-8 container py-[1.4rem] md:py-0 lg:px-[2rem]">
        <div className="flex flex-col md:flex-row  gap-y-3 md:gap-2 items-center basis-full md:basis-1/2 px-[15px]">
          <img
            src={signupFlight}
            className="w-[46px] h-[36px]"
            alt="signupFlighticon"
          />
          <div className="text-center md:text-start">
            <p className="text-white text-[14px] font-normal -mb-2">
              Batik Air,Malaysia Newsletter
            </p>
            <h3 className="text-white text-[30px]">Sign Up and Save</h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center  lg:gap-6  basis-full md:basis-1/2 px-[15px] gap-y-3 md:gap-2">
          <ul className="md:list-disc text-center md:text-start text-white text-[13px] md:text-[10px] lg:text-[13px]">
            <li>Be first to receive current offers</li>
            <li>Learn about new and exciting destinations</li>
            <li>Get the latest travel news and more</li>
          </ul>
          <Link
            to={"https://www.malindoair.com/special-offers/sign-up-newsletter"}
          >
            <button className=" bg-transparent border border-[#f7aa54] w-[100px] lg:w-[150px] rounded-full h-[35px] leading-[30px] lg:h-[40px]  lg:leading-[40px] p-0 normal-case font-normal text-center text-[#f7aa54] text-sm lg:text-[16px] md:ml-4 lg:ml-0 ">
              Sign me up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
