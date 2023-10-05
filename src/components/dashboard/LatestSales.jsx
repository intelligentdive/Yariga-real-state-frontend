import Link from "next/link";
import { BiDotsVerticalRounded } from "react-icons/bi";
import pro1 from "../../assets/property/pro1.png";
import pro2 from "../../assets/property/pro2.png";
import pro3 from "../../assets/property/pro3.png";
import pro4 from "../../assets/property/pro4.png";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

const LatestSales = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-heading dark:text-darkHeading">
          Latest Sales
        </h2>
        <span>
          <FaArrowRightLong className="text-text dark:text-darkText text-xl cursor-pointer" />
        </span>
      </div>

      {/* Property list list  */}
      <div className="mt-[20px]">
        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={pro1} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Metro Jayakar Apartment
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                North Carolina, USA
              </span>
            </div>
          </div>
          <span className="text-lg text-[#2F80ED] font-semibold">+ $35</span>
        </div>

        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={pro2} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Letdo Ji Hotel & Aportment
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                Carolina North, UK
              </span>
            </div>
          </div>
          <span className="text-lg text-[#2F80ED] font-semibold">+ $40</span>
        </div>

        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={pro3} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Star Sun Hotel & Apartment
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                North Carolina, USA
              </span>
            </div>
          </div>
          <span className="text-lg text-[#2F80ED] font-semibold">+ $35</span>
        </div>

        <div className="flex items-center justify-between mb-[15px]">
          <div className="flex items-center gap-[10px]">
            <Image src={pro4} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Metro Jayakar Apartment
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                North Carolina, USA
              </span>
            </div>
          </div>
          <span className="text-lg text-[#2F80ED] font-semibold">+ $50</span>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[10px]">
            <Image src={pro4} alt="Agent image" width={40} />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-heading dark:text-darkHeading text-sm font-medium">
                Metro Jayakar Apartment
              </h2>
              <span className="text-text dark:text-darkText text-xs font-normal">
                North Carolina, USA
              </span>
            </div>
          </div>
          <span className="text-lg text-[#2F80ED] font-semibold">+ $40</span>
        </div>
      </div>
    </div>
  );
};

export default LatestSales;
