import React from "react";
import { useForm } from "react-hook-form";
// react icons
import { PiPhoneCallFill } from "react-icons/pi";
import { TiSocialYoutube, TiWorld } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// form validations
import { zodResolver } from "@hookform/resolvers/zod";
import { contactValidations } from "../../validations/contactValidations";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactValidations),
  });

  const { setMessage, setError } = useAuth();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    const userReport = {
      name,
      email,
      subject,
      message,
    };
    try {
      const response = await axios.post(
        "http://localhost:7000/api/contact",
        userReport
      );
      const { message } = response.data;
      console.log(response.data);
      setMessage(message);
      setTimeout(() => setMessage(""), 3000);
      // clear input
      reset({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";
      setError(errorMessage);
      console.log(error);
    }
  };

  return (
    <div className=" flex -mx-1 h-full sm:flex-col sm:h-fit ">
      <div className=" px-1 w-[30%] h-full md:pr-4 md:w-2/5 sm:w-full sm:mb-8">
        <div className=" rounded-lg bg-gray-200 space-y-10 pt-32 pr-[4.375rem] pb-[7.25rem] pl-[5.525rem] h-full md:px-6 sm:py-16 sm:pl-16 ">
          <div className="flex center">
            <div className=" mr-5 flex items-center ">
              <PiPhoneCallFill />
            </div>
            <div>
              <p>+048 505 894 787</p>
              <p>+838 479 589 387</p>
            </div>
          </div>

          <div className="flex center">
            <div className=" mr-5 flex items-center ">
              <TiWorld />
            </div>
            <div>
              <p>amabilis@gmail.com</p>
              <p>amabiliswebsite.com</p>
            </div>
          </div>

          <div className="flex center">
            <div className=" mr-5 flex items-center ">
              <MdLocationPin />
            </div>
            <div>
              <p>No. 3b Amabilis street, Port Harcourt, Nigeria</p>
            </div>
          </div>

          <div className=" mt-14 text-center ">
            <h3 className=" font-medium text-black text-2xl mb-4 ">
              Follow us
            </h3>
            <ul className=" flex justify-center ">
              <li className=" mx-[0.625rem] ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebook size={20} />
                </a>
              </li>
              <li className=" mx-[0.625rem] ">
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialPinterest size={20} />
                </a>
              </li>
              <li className=" mx-[0.625rem] ">
                {" "}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={20} />
                </a>
              </li>
              <li className=" mx-[0.625rem] ">
                {" "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
              <li className=" mx-[0.625rem] ">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialYoutube size={20} />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" px-1 w-[70%] h-full md:w-3/5 sm:w-full">
        <div className=" rounded-lg bg-gray-200 py-[3.125rem] px-28 h-full md:px-8 sm:px-4 ">
          <h2 className=" mb-16 text-2xl font-medium sm:mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="sm:text-sm">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              {...register("name")}
              className=" bg-transparent w-[44%] border border-white h-10 py-1 px-4 mb-8 mr-8 text-black outline-lilac placeholder:text-black md:w-full sm:w-full "
            />
            {errors.name && <p className="bg-red-500">{errors.name.message}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              {...register("email")}
              className=" bg-transparent w-[45%] border border-white h-10 py-1 px-4 mb-8 ml-8 text-black  outline-lilac placeholder:text-black md:ml-0 md:w-full sm:w-full sm:ml-0 "
            />
            {errors.email && (
              <p className="bg-red-500">{errors.email.message}</p>
            )}
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              {...register("subject")}
              className=" block mb-8 bg-transparent border border-white py-1 px-4 w-full h-12 outline-lilac placeholder:text-black "
            />
            {errors.subject && (
              <p className="bg-red-500">{errors.subject.message}</p>
            )}
            <textarea
              name="message"
              placeholder="Your message*"
              {...register("message")}
              className=" w-full h-64 bg-transparent border border-white py-1 px-4 outline-lilac placeholder:text-black md:pt-4 sm:pt-4 "
            ></textarea>
            {errors.message && (
              <p className="bg-red-500">{errors.message.message}</p>
            )}
            <button
              type="submit"
              className=" block bg-black text-white w-28 h-8 mt-8 rounded hover:bg-lilac "
            >
              {" "}
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
