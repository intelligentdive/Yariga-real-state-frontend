"use client"

import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const AllAgent = ({ agent }) => {
    return (
        <div className="md:flex items-start justify-between mb-[20px] bg-white md:p-[20px] dark:bg-black">
            <div className="flex gap-[10px] w-full">
                <Image src={agent?.image} alt="Agent image" className="w-[130px] h-[110px] md:w-[250px] md:h-[193px]" width={250}
                    height={193} />
                <div className="flex flex-col ml-[20px]">
                    <div className="md:mb-[52px] text">
                        <h2 className="text-heading dark:text-darkHeading font-semibold md:text-[22px] text-[14px] mb-[7px]">
                            Benny Chagur
                        </h2>
                        <p className="text-text dark:text-darkText font-normal text-[12px] lg:text-[14px] md:mb-0 mb-[8px]">
                            Real-Estate Agent
                        </p>
                    </div>

                    <div className="md:flex lg:flex-row flex-col items-center w-full">
                        <div className=" lg:min-w-[400px] w-full">
                            <h3 className="text-text dark:text-darkText font-normal text-[12px] lg:text-[14px] md:mb-0 mb-[5px] md:mb-5">{agent?.email}</h3>
                            <h3 className="text-text dark:text-darkText font-normal text-[12px] lg:text-[14px] md:mb-0 mb-[5px]">{agent?.phone}</h3>
                        </div>
                        <div className="">
                            <p className="text-text dark:text-darkText font-normal text-[12px] lg:text-[14px] md:mb-0 mb-[5px] md:mb-5">{agent?.location}</p>
                            <h3 className="text-text dark:text-darkText font-normal text-[12px] lg:text-[14px] md:mb-0 mb-[5px]">{agent?.property_number} Properties</h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className="hidden md:block">
                <BiDotsHorizontalRounded className="text-text text-xl cursor-pointer" />
            </div>

        </div>
    );
};

export default AllAgent;