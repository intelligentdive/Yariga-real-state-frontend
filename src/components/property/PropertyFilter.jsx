"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import { RiEqualizerLine } from "react-icons/ri";

const PropertyFilter = () => {
  const anyStatus = ["Any Type", "For Sale", "For Rent"];
  const anyTypes = ["Apartment", "Houses", "Commercial", "Garages", "Lots"];
  const countries = [
    "Bangladesh",
    "India",
    "USA",
    "UAE",
    "UK",
    "Australia",
    "Japan",
  ];

  const states = [
    "Dhaka",
    "Barisal",
    "Rajsahi",
    "Bogura",
    "Noakhali",
    "Chottogram",
    "Kushtia",
  ];

  const [statusToggleIcon, setStatusToggleIcon] = useState(false);
  const [statusValue, setStatusValue] = useState("Any Status");

  const [typeToggleIcon, setTypeToggleIcon] = useState(false);
  const [typeValue, setTypeValue] = useState("Any Type");

  const [countriesToggleIcon, setCountriesToggleIcon] = useState(false);
  const [countryValue, setCountryValue] = useState("");

  const [sateToggleIcon, setSateToggleIcon] = useState(false);
  const [stateValue, setStateValue] = useState("");

  const getStatusValue = (e) => {
    setStatusValue(e.target.textContent);
    setStatusToggleIcon(false);
  };

  const getTypeValue = (e) => {
    setTypeValue(e.target.textContent);
    setTypeToggleIcon(false);
  };

  const getCountyValue = (e) => {
    setCountryValue(e.target.textContent);
    setCountriesToggleIcon(false);
  };

  const getStateValue = (e) => {
    setStateValue(e.target.textContent);
    setSateToggleIcon(false);
  };

  return (
    <div className="flex  flex-wrap gap-[10px] md:gap-5 ">
      {/* search address city or zip code for large device*/}
      <div className="md:w-[229px] hidden md:block  bg-lightBg dark:bg-darkBg p-[10px] h-[38px] rounded-[8px]">
        <div className="flex items-center gap-[7px]">
          <FiSearch />
          <input
            type="text"
            placeholder="Enter an address city or zip code"
            className="bg-transparent text-xs font-medium w-full outline-none placeholder-heading dark:placeholder-darkHeading"
          />
        </div>
      </div>
      {/* search address city or zip code for small device*/}
      <div className="md:hidden block w-[106px] flex items-center gap-[7px] bg-lightBg dark:bg-darkBg p-[10px] h-[38px] rounded-[8px]">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-xs font-medium w-full outline-none placeholder-heading dark:placeholder-darkHeading"
        />
      </div>

      {/* any status select */}
      <div className="w-[106px] md:w-[160px]">
        <div
          className="relative w-full bg-white  dark:bg-darkWhite rounded cursor-pointer"
          onClick={() => setStatusToggleIcon(!statusToggleIcon)}
        >
          <input
            type="text"
            name="division"
            value={statusValue}
            className="bg-lightBg dark:bg-darkBg p-[10px] outline-none w-full rounded-[8px] text-xs font-medium"
          />
          <div className="absolute right-3 top-2">
            {statusToggleIcon ? (
              <>
                <FiChevronUp className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            ) : (
              <>
                <FiChevronDown className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            )}
          </div>
          {statusToggleIcon && (
            <ul className="bg-white dark:bg-darkWhite shadow-lg z-50 absolute top-full left-0 w-full">
              {anyStatus.map((item, index) => (
                <li
                  key={index}
                  className="px-2 py-[10px] rounded-md text-[14px] font-medium bg-transparent text-text dark:text-darkText hover:bg-main hover:text-white hover:dark:text-white"
                  onClick={(e) => getStatusValue(e)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* any type */}
      <div className="w-[106px] md:w-[160px]">
        <div
          className="relative w-full bg-white  dark:bg-darkWhite rounded cursor-pointer"
          onClick={() => setTypeToggleIcon(!typeToggleIcon)}
        >
          <input
            type="text"
            name="division"
            value={typeValue}
            className="bg-lightBg dark:bg-darkBg p-[10px] outline-none w-full rounded-[8px] text-xs font-medium"
          />
          <div className="absolute right-3 top-2">
            {typeToggleIcon ? (
              <>
                <FiChevronUp className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            ) : (
              <>
                <FiChevronDown className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            )}
          </div>
          {typeToggleIcon && (
            <ul className="bg-white dark:bg-darkWhite shadow-lg z-50 absolute top-full left-0 w-full">
              {anyTypes.map((item, index) => (
                <li
                  key={index}
                  className="px-2 py-[10px] rounded-md text-[14px] font-medium bg-transparent text-text dark:text-darkText hover:bg-main hover:text-white hover:dark:text-white"
                  onClick={(e) => getTypeValue(e)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* all countries */}
      <div className="w-[106px] md:w-[160px]">
        <div
          className="relative w-full bg-white  dark:bg-darkWhite rounded cursor-pointer"
          onClick={() => setCountriesToggleIcon(!countriesToggleIcon)}
        >
          <input
            type="text"
            name="division"
            value={countryValue}
            placeholder="All Countries"
            className="bg-lightBg dark:bg-darkBg p-[10px] outline-none w-full rounded-[8px] text-xs font-medium placeholder-heading dark:placeholder-darkHeading"
          />
          <div className="absolute right-3 top-2">
            {countriesToggleIcon ? (
              <>
                <FiChevronUp className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            ) : (
              <>
                <FiChevronDown className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            )}
          </div>
          {countriesToggleIcon && (
            <ul className="bg-white dark:bg-darkWhite shadow-lg z-50 h-48 overflow-y-scroll absolute top-full left-0 w-full">
              {countries.map((item, index) => (
                <li
                  key={index}
                  className="px-2 py-[10px] rounded-md text-[14px] font-medium bg-transparent text-text dark:text-darkText hover:bg-main hover:text-white hover:dark:text-white"
                  onClick={(e) => getCountyValue(e)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* all States */}
      <div className="w-[106px] md:w-[160px]">
        <div
          className="relative w-full bg-white  dark:bg-darkWhite rounded cursor-pointer"
          onClick={() => setSateToggleIcon(!sateToggleIcon)}
        >
          <input
            type="text"
            name="division"
            value={stateValue}
            placeholder="All State"
            className="bg-lightBg dark:bg-darkBg p-[10px] outline-none w-full rounded-[8px] text-xs font-medium placeholder-heading dark:placeholder-darkHeading"
          />
          <div className="absolute right-3 top-2">
            {sateToggleIcon ? (
              <>
                <FiChevronUp className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            ) : (
              <>
                <FiChevronDown className="text-heading dark:text-darkHeading text-lg dark:text-white  cursor-pointer" />
              </>
            )}
          </div>
          {sateToggleIcon && (
            <ul className="bg-white dark:bg-darkWhite shadow-lg z-50 h-48 overflow-y-scroll absolute top-full left-0 w-full">
              {states.map((item, index) => (
                <li
                  key={index}
                  className="px-2 py-[10px] rounded-md text-[14px] font-medium bg-transparent text-text dark:text-darkText hover:bg-main hover:text-white hover:dark:text-white"
                  onClick={(e) => getStateValue(e)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* more button */}
      <div className="flex items-center gap-[7px] bg-lightBg dark:bg-darkBg p-[10px] h-[38px] rounded-[8px] cursor-pointer">
        <RiEqualizerLine className="text-heading dark:text-darkHeading" />
        <p className="text-xs font-medium">More</p>
      </div>
    </div>
  );
};

export default PropertyFilter;
