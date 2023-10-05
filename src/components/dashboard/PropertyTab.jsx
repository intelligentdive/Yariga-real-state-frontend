"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const PropertyTab = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  return (
    <>
      <ul className="flex items-center flex-wrap gap-3">
        <li
          onClick={() => setActiveTab("tab1")}
          className={
            activeTab === "tab1"
              ? "py-[10px] px-[15px] bg-main text-white text-xs font-semibold rounded-md cursor-pointer"
              : "py-[10px] px-[15px] bg-[#f7f7f7] dark:bg-darkBg text-text text-xs font-semibold rounded-md cursor-pointer"
          }
        >
          Popular
        </li>
        <li
          onClick={() => setActiveTab("tab2")}
          className={
            activeTab === "tab2"
              ? "py-[10px] px-[15px] bg-main text-white text-xs font-semibold rounded-md cursor-pointer"
              : "py-[10px] px-[15px] bg-[#f7f7f7] dark:bg-darkBg text-text text-xs font-semibold rounded-md cursor-pointer"
          }
        >
          Recommended
        </li>
        <li
          onClick={() => setActiveTab("tab3")}
          className={
            activeTab === "tab3"
              ? "py-[10px] px-[15px] bg-main text-white text-xs font-semibold rounded-md cursor-pointer"
              : "py-[10px] px-[15px] bg-[#f7f7f7] dark:bg-darkBg text-text text-xs font-semibold rounded-md cursor-pointer"
          }
        >
          Newest
        </li>
        <li
          onClick={() => setActiveTab("tab4")}
          className={
            activeTab === "tab4"
              ? "py-[10px] px-[15px] bg-main text-white text-xs font-semibold rounded-md cursor-pointer flex items-center gap-[5px]"
              : "py-[10px] px-[15px] bg-[#f7f7f7] dark:bg-darkBg text-text text-xs font-semibold rounded-md cursor-pointer flex items-center gap-[5px]"
          }
        >
          Most Recent <BiChevronDown />
        </li>
      </ul>
    </>
  );
};

export default PropertyTab;
