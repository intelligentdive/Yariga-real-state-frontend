import { FiChevronLeft } from "react-icons/fi";
import BigImage from "../../assets/property/datails/image1.png";
import image2 from "../../assets/property/datails/image2.png";
import image3 from "../../assets/property/datails/image3.png";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { CiLocationOn, CiParking1 } from "react-icons/ci";
import {
  BiBath,
  BiBed,
  BiDotsHorizontalRounded,
  BiMessageAltDetail,
  BiPlus,
  BiWifi2,
} from "react-icons/bi";
import { FaSmoking } from "react-icons/fa6";
import { MdBalcony, MdOutlineKitchen } from "react-icons/md";
import profile from "../../assets/property/datails/profile.png";
import { BsFillTelephoneFill } from "react-icons/bs";

const PropertyDetails = () => {
  return (
    <div className="p-5 bg-white dark:bg-darkWhite rounded-[15px]">
      <h2 className="flex items-center gap-[25px] text-heading dark:text-darkHeading text-[22px] font-semibold">
        <FiChevronLeft />
        Details
      </h2>

      {/* details body */}
      <div className="mt-[25px] grid grid-cols-1 lg:grid-cols-10 gap-[21px]">
        <div className=" lg:col-span-7 ">
          {/* image grid */}
          <div className="grid grid-cols-10 gap-5">
            {/* big image */}
            <div className="col-span-7 ">
              <Image src={BigImage} alt="" width={541} />
            </div>
            {/* small image */}
            <div className="col-span-3 ">
              <div className="flex flex-col gap-2">
                <div>
                  <Image src={image2} alt="" width={203} height={162} />
                </div>
                <div className=" ">
                  <Image src={image3} alt="" width={203} height={162} />
                </div>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="mt-[15px]">
            <div className="grid grid-cols-10 gap-5">
              <div className="col-span-7 ">
                <h5 className="text-heading dark:text-darkHeading text-[18px] font-medium">
                  Apartment
                </h5>
                <h2 className="text-[22px] font-medium text-heading dark:text-darkHeading mt-[10px]">
                  Star Sun Hotel & Aportment
                </h2>
                <p className="flex items-center text-text dark:text-darkText gap-[5px] mt-2">
                  <CiLocationOn />
                  North Carolina, USA
                </p>
              </div>
              <div className="col-span-3  hidden md:block">
                <div className="flex items-center gap-[5px]">
                  <AiFillStar className="text-[#F2C94C]" />
                  <AiFillStar className="text-[#F2C94C]" />
                  <AiFillStar className="text-[#F2C94C]" />
                  <AiFillStar className="text-[#F2C94C]" />
                  <AiFillStar className="text-[#F2C94C]" />
                </div>
                <p className="text-base text-hading dark:text-darkHeading font-medium my-2">
                  Price
                </p>
                <h3 className="text-main text-[25px] font-bold ">
                  $80{" "}
                  <span className="text-text dark:text-darkText text-sm font-normal">
                    For One Day
                  </span>
                </h3>
              </div>
            </div>
            {/* facility */}
            <div className="mt-5">
              <h2 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                Facility
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 mt-[27px] mb-[25px] gap-y-5">
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <BiBed className="text-text dark:text-darkText" /> 4 Beds
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <BiBath className="text-text dark:text-darkText" /> Baths
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <BiPlus className="text-text dark:text-darkText" /> 28M Area
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <FaSmoking className="text-text dark:text-darkText" /> Smoking
                  Area
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <MdOutlineKitchen className="text-text dark:text-darkText" />{" "}
                  Kitchen
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <MdBalcony className="text-text dark:text-darkText" /> Balcony
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <BiWifi2 className="text-text dark:text-darkText" /> Wifi
                </p>
                <p className="flex items-center gap-[5px] text-heading capitalize dark:text-darkHeading">
                  <CiParking1 className="text-text dark:text-darkText" />
                  Parking
                </p>
              </div>
            </div>

            {/* description */}
            <div>
              <h2 className="text-heading dark:text-darkHeading text-[18px] font-medium">
                Description
              </h2>
              <p className="text-text dark:text-darkText text-sm font-normal mt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                corrupti odit maiores blanditiis eveniet illum quia hic
                suscipit. Fugiat, sunt tempora modi labore voluptatem iusto
                corporis odit, illum reprehenderit numquam sapiente. Dolor quam
                adipisci iusto incidunt minus, ex suscipit perspiciatis
                reprehenderit, voluptatem quis similique dolore, dicta quod
                quidem et voluptates.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-3">
          <div className="border border-lightBg dark:border-darkBg rounded-[4px] pt-[15px] px-[25px] pb-[20px]">
            {/* 3 dots  */}
            <div className="flex justify-end">
              <BiDotsHorizontalRounded className="text-text dark:text-darkText text-2xl cursor-pointer" />
            </div>
            {/* profile  */}
            <div className="flex justify-center w-full">
              <div>
                <Image src={profile} alt="" width={90} className="mx-auto" />

                <h2 className="text-lg font-semibold mt-[15px] text-center text-heading dark:text-darkHeading">
                  Hussain Ahamed
                </h2>
                <p className="text-text dark:text-darkText text-sm font-normal mt-[5px] text-center">
                  Agent
                </p>
                {/* agent location */}
                <div className="mt-[10px] mb-[25px] text-center">
                  <p className="flex items-center text-text dark:text-darkText gap-[16px] mt-2">
                    <CiLocationOn />
                    North Carolina, USA
                  </p>
                  <h2 className="text-heading dark:text-darkHeading text-base font-semibold mt-1">
                    10 Properties
                  </h2>
                </div>
              </div>
            </div>
            {/* button message and call*/}
            <div className="flex justify-center lg:flex-wrap xl:flex-nowrap gap-[21px] items-center w-full">
              <button className="flex items-center gap-2 text-white text-base font-semibold px-[12px] py-[10px] rounded-[5px] bg-main capitalize">
                <BiMessageAltDetail className="text-xl" /> message
              </button>
              <button className="flex items-center gap-2 text-white text-base font-semibold px-[30px] py-[10px] rounded-[5px] bg-[#2ED480] capitalize">
                <BsFillTelephoneFill className="text-xl" /> Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
