"use client";

import Image from "next/image";
import Link from "next/link";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  BsFillBuildingsFill,
  BsFillEnvelopeFill,
  BsTelephone,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const AllAgent = ({ agent }) => {
  return (
    <Link href={`/agent/${agent?.id}`}>
      <div className="md:flex items-start justify-between mb-[20px] bg-white md:p-[20px] dark:bg-darkWhite rounded-[10px]">
        <div className="flex gap-[10px] md:gap-5 w-full">
          <Image
            src={agent?.image}
            alt="Agent image"
            className="w-[130px] h-[110px] md:w-[250px] md:h-[193px]"
            width={250}
            height={193}
          />
          <div className="flex flex-col py-2">
            <div className="md:mb-[52px] ">
              <h2 className="text-heading dark:text-darkHeading font-semibold md:text-[22px] text-[14px] mb-[7px]">
                Benny Chagur
              </h2>
              <p className="text-text dark:text-darkText font-normal text-[12px] lg:text-[14px] md:mb-0 mb-[8px]">
                Real-Estate Agent
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 w-full lg:gap-16">
              {/* email */}
              <div className="lg:col-span-5 ">
                <h3 className="flex items-center gap-[10px] text-text dark:text-darkText text-xs font-normal md:text-sm">
                  <BsFillEnvelopeFill className="text-sm" />
                  {agent?.email}
                </h3>

                {/* phone */}

                <h3 className="flex items-center gap-[10px] text-text dark:text-darkText text-xs font-normal md:text-sm mt-[5px] lg:mt-5 ">
                  <BsTelephone className="text-sm" />
                  {agent?.phone}
                </h3>
              </div>
              <div className="lg:col-span-5 mt-1 lg:mt-0">
                <h3 className="flex items-center gap-[10px] text-text dark:text-darkText text-xs font-normal md:text-sm">
                  <FaLocationDot className="text-sm" />
                  {agent?.location}
                </h3>

                {/* phone */}

                <h3 className="flex items-center gap-[10px] text-text dark:text-darkText mt-[5px] text-xs font-normal md:text-sm lg:mt-5 ">
                  <BsFillBuildingsFill className="text-sm" />
                  {agent?.property_number} Properties
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <BiDotsHorizontalRounded className="text-text text-xl cursor-pointer" />
        </div>
      </div>
    </Link>
  );
};

export default AllAgent;
