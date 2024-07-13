import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import planeIcon from "../assets/plane_icon.svg";
import Toast from "../components/toast";
import { useLoading } from "../context";
import Layout from "../pages/layout";

const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const { setIsLoading } = useLoading();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!captchaValue) {
      setMessage("Captcha not verified");
      setIsVisible(true);
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://api.flymalindo.com/api/web/flight/queryCode?code=${data.refPNR}`
      );

      if (response?.data.status === false) {
        setMessage("Error in retrieving your booking. Please try again.");
        setIsVisible(true);
        setIsLoading(false);
      } else {
        setMessage(null);
        setIsVisible(false);
        setIsLoading(false);
        navigate(`/manage-addons?refPNR=${data.refPNR}`);
      }
    } catch (error) {
      setMessage("An error occurred while fetching data.");
      setIsVisible(true);
      setIsLoading(false);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <Layout title={"Make Online Flight Change "} homeFooter={true}>
      <Toast
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        toastMessage={message}
      />

      <form
        className="bg-[#F1F1F1] min-h-[450px] py-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="bg-white max-w-[1140px] min-h-[420px] p-[25px] mx-auto">
          <div className="flex gap-x-2 items-center mb-[25px]">
            <img src={planeIcon} alt="plane" className="w-[44px] h-[34px]" />
            <h2 className="text-[20px] font-medium text-[#333]">
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
          <div className="flex self-start w-full flex-wrap">
            <div className="text-[#222] text-[14px] pr-[20px] inputdiv1">
              <label htmlFor="refPNR" className="block mb-[5px]">
                Booking Reference (PNR) <span className="text-red-600">*</span>
              </label>
              <input
                name="refPNR"
                type="text"
                id="refPNR"
                className="form-control form-control-1 uppercase w-[400px]"
                {...register("refPNR", {
                  required: "Please enter Booking Reference(PNR)",
                })}
              />
              {errors.refPNR && (
                <small className="block text-red-600 mt-[0.52rem] ms-1 ">
                  {errors.refPNR.message}
                </small>
              )}
            </div>

            <div className="text-[#222] text-[14px] pr-[20px] inputdiv2">
              <label htmlFor="FirstName" className="block mb-[5px]">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                name="FirstName"
                type="text"
                id="FirstName"
                className="form-control form-control-2 uppercase w-[165px]"
                {...register("FirstName", {
                  required: "Please enter First Name",
                })}
              />

              {errors.FirstName && (
                <small className="block text-red-600 mt-[0.52rem] ms-1 ">
                  {errors.FirstName.message}
                </small>
              )}
            </div>
            <div className="text-[#222] text-[14px] inputdiv3">
              <label htmlFor="LastName" className="block mb-[5px]">
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                name="LastName"
                type="text"
                id="LastName"
                className="form-control form-control-3 uppercase w-[165px]"
                {...register("LastName", {
                  required: "Please enter Last Name",
                })}
              />
              {errors.LastName && (
                <small className="block text-red-600 mt-[0.52rem] ms-1 ">
                  {errors.LastName.message}
                </small>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-default mt-6 max-w-[108px] h-[45px]"
            >
              Continue
            </button>
          </div>
          <ReCAPTCHA
            className="inline-block mt-[30px]"
            theme="light"
            sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Home;
