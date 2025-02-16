import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import axios from "axios";

import { section } from "@/lib/footer-section";
import Title from "@/components/company-name/Title";
import BackToTopButton from "@/components/scroll-to-top-button/BackToTopButton";
import { subscriptionValidations } from "@/validations/subscriptionValidations";
import { useAuth } from "@/context/AuthContext";
import { currentYear } from "@/utility/current-year";

function Footer() {
  const { setMessage, setError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(subscriptionValidations),
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      const { subscriptionEmail } = data;
      const response = await axios.post(`${apiUrl}/api/subscribe`, {
        subscriptionEmail,
      });

      setMessage(response?.data?.message);
      setTimeout(() => setMessage(""), 3000);
      reset({
        subscriptionEmail: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";
      setError(errorMessage);
      setTimeout(() => setError(""), 3000);
      console.log("Error subscribing", error);
    }
  };

  return (
    <footer className=" w-full bg-light-gray py-24 px-20 md:h-fit md:px-8 md:text-sm sm:text-sm sm:h-fit sm:py-12 sm:px-4 ">
      <div className=" max-w-7xl mx-auto grid grid-cols-5 md:grid-cols-3 md:gap-y-8 sm:grid-cols-1 sm:gap-y-8 ">
        <div className="flex flex-col justify-center md:justify-start">
          <Title />
          <p className="text-gray-500 sm:mt-2">
            {`© ${currentYear} Amabilis.`}
          </p>
          <p className="text-gray-500 md:text-sm ">All Rights Reserved</p>
        </div>
        {section.map((sect) => (
          <div key={v4()}>
            <h4 className=" font-medium ">{sect.title}</h4>
            <ul>
              {sect.links.map((link) => (
                <li
                  key={v4()}
                  className=" mt-4 text-gray-500 hover:text-lilac cursor-pointer transition-all duration-300 ease-in-out "
                >
                  {link.url.startsWith("http") ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link to={link.url}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <form onSubmit={handleSubmit(onSubmit)} className=" md:col-span-2 ">
          <h4 className=" font-medium ">SUBSCRIBE</h4>
          <p className="mt-4">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <input
            type="email"
            name="subscriptionEmail"
            placeholder="Enter your email here..."
            className=" w-full block bg-inherit focus:outline-none py-3 border-b-2 "
            {...register("subscriptionEmail")}
          />
          {errors.subscriptionEmail && (
          <p className=" bg-red-500  ">{errors.subscriptionEmail.message}</p>
        )}
          <button className="mt-2 border-b-2 border-gray-400 hover:text-lilac hover:border-lilac transition-all duration-300 ease-in-out md:text-sm sm:text-sm ">
            SUBSCRIBE
          </button>
        </form>
      </div>
      <BackToTopButton />
    </footer>
  );
}

export default Footer;
