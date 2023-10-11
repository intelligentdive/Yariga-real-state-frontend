import React from "react";
import { BsPlus } from "react-icons/bs";

const PropertyPage = () => {
  return (
    <div>
      {/* property heading */}
      <div className="flex justify-between">
        <h1 className="text-heading dark:text-darkHeading text-[25px] font-bold">
          Property List
        </h1>
        <button className="bg-main text-white flex items-center py-[13px] px-[20px] rounded-[10px] text-[14px] font-medium">
          <BsPlus className="text-white text-xl" /> Add Property
        </button>
      </div>
    </div>
  );
};

export default PropertyPage;
