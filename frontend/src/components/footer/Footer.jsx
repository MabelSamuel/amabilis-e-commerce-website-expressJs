import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import Title from "../company-name/Title";
import BackToTopButton from "../scroll-to-top-button/BackToTopButton";

function Footer() {
  const section = [
    {
      title: "ABOUT US",
      links: [
        { title: "About us", url: "/about" },
        { title: "Store location", url: "#" },
        { title: "Contact", url: "/contact" },
        { title: "Orders tracking", url: "#" },
      ],
    },
    {
      title: "USEFUL LINKS",
      links: [
        { title: "Returns", url: "#" },
        { title: "Support Policy", url: "#" },
        { title: "Size guide", url: "#" },
        { title: "FAQs", url: "#" },
      ],
    },
    {
      title: "FOLLOW US",
      items: ["Facebook", "Twitter", "Instagram", "Youtube"],
      links: [
        { title: "Facebook", url: "https://www.facebook.com" },
        { title: "Twitter", url: "https://www.twitter.com" },
        { title: "Instagram", url: "https://www.instagram.com" },
        { title: "Youtube", url: "https://www.youtube.com" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" w-full bg-light-gray py-24 px-20 md:h-fit md:px-8 sm:h-fit sm:py-12 sm:px-4 ">
      <div className=" max-w-7xl mx-auto grid grid-cols-5 md:grid-cols-3 md:gap-y-8 sm:grid-cols-1 sm:gap-y-8 ">
        <div className="flex flex-col justify-center md:justify-start">
          <Title />
          <p className="text-gray-500 md:text-sm sm:text-sm sm:mt-2">
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
                  className=" mt-4 text-gray-500 hover:text-lilac cursor-pointer transition-all duration-300 ease-in-out md:text-sm sm:text-sm "
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
        <div className=" md:col-span-2 ">
          <h4 className=" font-medium ">SUBSCRIBE</h4>
          <p className="mt-4 md:text-sm sm:text-sm">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email here..."
            className=" w-full block bg-inherit focus:outline-none py-3 border-b-2 md:text-sm sm:text-sm "
          />
          <input
            type="submit"
            value={"SUBSCRIBE"}
            className="mt-2 border-b-2 border-gray-400 hover:text-lilac hover:border-lilac transition-all duration-300 ease-in-out md:text-sm sm:text-sm "
          />
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
}

export default Footer;
