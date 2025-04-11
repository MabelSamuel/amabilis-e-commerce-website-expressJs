import React from "react";
// custom hooks
import { useDisplayProductIcons } from "@/hooks/useDisplayProductIcons";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { teamMembers } from "@/lib/about-us";

function TeamMembers() {
  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();
  return (
    <>
      <div className="flex flex-col items-center pb-24">
        <h2 className=' font-semibold text-3xl pb-4 relative before:absolute before:bg-black before:content-[""] before:h-1 before:w-16 before:left-0 before:right-0 before:bottom-0 before:my-0 before:mx-auto '>
          Team Members
        </h2>
        <p className="pt-6 sm:text-center">
          Team members that give sustainability, quality and customer
          satisfaction
        </p>
      </div>
      <div className=" flex gap-6 sm:flex-col ">
        {teamMembers.map((member) => (
          <div key={member.id} className=" basis-1/4 ">
            <div
              className="h-80 relative sm:h-[30rem]"
              onMouseEnter={() => handleShow(member.id)}
              onMouseLeave={() => setIsShow(false)}
              onClick={() => handleShow(member.id)}
            >
              <img
                src={member.image}
                alt={member.name}
                className=" h-full w-full "
              />
              {isShow === member.id && (
                <div className="bg-white flex absolute top-2/4 z-20 justify-center w-full p-2 gap-2">
                  <a href={member.socialMedia.facebook} target="_blank">
                    <IoLogoFacebook className="size-6 text-[#1877F2] sm:size-9" />
                  </a>
                  <a href={member.socialMedia.twitter} target="_blank">
                    <AiFillTwitterCircle className="size-6 text-[#1DA1F2] sm:size-9" />
                  </a>
                  <a href={member.socialMedia.instagram} target="_blank">
                    <FaInstagramSquare className="size-6 text-[#E1306C] sm:size-9" />
                  </a>
                </div>
              )}
            </div>
            <div className="text-center p-4 bg-light-gray">
              <p className="font-medium text-xl">{member.name}</p>
              <p className="italic">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamMembers;
