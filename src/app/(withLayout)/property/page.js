import PropertyCard from "@/components/property/PropertyCard";
import PropertyFilter from "@/components/property/PropertyFilter";
import React from "react";
import { BsPlus } from "react-icons/bs";

const PropertyPage = async () => {
  const res = await fetch("http://localhost:5000/property");
  const properties = await res.json();

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

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-[65px] gap-y-6 mt-[25px]">
          {properties?.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
