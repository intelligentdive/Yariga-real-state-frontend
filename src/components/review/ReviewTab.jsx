"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const ReviewTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="md:px-[25px] pl-[9px] md:pl-0 bg-white dark:bg-darkWhite rounded-[15px] inline-block w-full md:w-max">
      <ul className="flex items-center flex-wrap gap-3   ">
        <li
          onClick={() => setActiveTab("tab1")}
          className={
            activeTab === "tab1"
              ? "md-active-tab-review "
              : " normal-tab text-text dark:text-darkText"
          }
        >
          All Reviews
        </li>
        <li
          onClick={() => setActiveTab("tab2")}
          className={
            activeTab === "tab2"
              ? "md-active-tab-review "
              : "normal-tab text-text dark:text-darkText"
          }
        >
          Published
        </li>
        <li
          onClick={() => setActiveTab("tab3")}
          className={
            activeTab === "tab3"
              ? "md-active-tab-review "
              : "normal-tab text-text dark:text-darkText"
          }
        >
          Deleted
        </li>
      </ul>
    </div>
  );
};

export default ReviewTab;
