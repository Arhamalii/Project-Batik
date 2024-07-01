import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import Layout from "../pages/layout";
const Home = () => {
  return (
    <Layout>
      <div className="bg-[#F1F1F1] min-h-[450px] py-[20px]">
        <div className="bg-white max-w-[1140px] min-h-[420px] p-[25px] mx-auto">
          <div className="flex gap-x-2 items-center mb-[25px]">
            <MdOutlineFlightTakeoff className=" text-[20px] text-[#be1a4a]" />
            <h2 className="text-[21px] font-medium text-[#333] ]">
              Manage Booking
            </h2>
          </div>

          <div className="text-[#222] text-[14px]">
            <p className="mb-[10px]">
              Enter your booking reference, first name and last name.
            </p>
            <p className="mb-[10px]">
              Please ensure that your name format is the same as entered in your
              booking.
            </p>
            <p className="mb-[10px]">
              All <span className="text-red-600">*</span> fields are mandatory.
            </p>
          </div>
          {/* inputs API integrate here */}
          <div className="flex items-center w-full flex-wrap">
            <div className="text-[#222] text-[14px] pr-[20px] inputdiv1">
              <label htmlFor="" className=" block mb-[5px]">
                Booking Reference (PNR) <span className="text-red-600">*</span>
              </label>
              <input
                name="txtPNR"
                type="text"
                id="txtPNR"
                className="form-control form-control-1 uppercase w-[300px] "
              ></input>
            </div>

            <div className="text-[#222] text-[14px] pr-[20px] inputdiv2">
              <label htmlFor="" className=" block mb-[5px]">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                name="txtPNR"
                type="text"
                id="txtPNR"
                className="form-control form-control-2 uppercase w-[165px]"
              ></input>
            </div>
            <div className="text-[#222] text-[14px] inputdiv3">
              <label htmlFor="" className=" block mb-[5px]">
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                name="txtPNR"
                type="text"
                id="txtPNR"
                className="form-control form-control-3 uppercase w-[165px]"
              ></input>
            </div>

            <button type="submit" class="btn btn-default mt-6 ">
              Continue
            </button>
          </div>
          <ReCAPTCHA
            className="inline-block mt-[30px]"
            theme="light"
            sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
            // ref={this._reCaptchaRef}
            // onChange={this.handleChange}
            // asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
