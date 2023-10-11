import { FiChevronLeft } from "react-icons/fi";
import BigImage from "../../assets/property/datails/image1.png";
import image2 from "../../assets/property/datails/image2.png";
import image3 from "../../assets/property/datails/image3.png";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const PropertyDetails = () => {
  return (
    <div className="p-5 bg-white dark:bg-darkWhite rounded-[15px]">
      <h2 className="flex items-center gap-[25px] text-heading dark:text-darkHeading text-[22px] font-semibold">
        <FiChevronLeft />
        Details
      </h2>

      {/* details body */}
      <div className="mt-[25px] grid grid-cols-1 lg:grid-cols-10">
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

              {/* review and price */}
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
          </div>
        </div>
        <div className="bg-red-600 lg:col-span-3">I am red</div>
      </div>
    </div>
  );
};

export default PropertyDetails;
