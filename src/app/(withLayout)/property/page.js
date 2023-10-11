import PropertyFilter from "@/components/property/PropertyFilter";
import React from "react";
import { BsPlus } from "react-icons/bs";

const PropertyPage = () => {
  return (
    <div>
      {/* property heading */}
      <div className="flex items-center px-[18px] md:px-0 justify-between">
        <h1 className="text-heading dark:text-darkHeading text-[18px] md:text-[25px] font-bold">
          Property List
        </h1>
        <button className="bg-main text-white flex items-center py-[11px] px-[15px] md:py-[13px] md:px-[20px] rounded-[10px] text-[14px] font-medium">
          <BsPlus className="text-white text-xl" /> Add Property
        </button>
      </div>
      {/* property content */}
      <div className=" px-[18px] md:px-5 py-5 bg-white dark:bg-darkWhite rounded-[15px] mt-5">
        <PropertyFilter />
      </div>
    </div>
  );
};

export default PropertyPage;
