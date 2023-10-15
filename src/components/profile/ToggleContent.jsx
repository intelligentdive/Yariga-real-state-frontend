"use client";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ProfileToggleContent from "../navbar/ProfileToggleContent";
import { useEffect, useRef, useState } from "react";
import ProfileToggle from "./profileToggle";

const ToggleContent = () => {
  const [profileContentShow, setProfileContentShow] = useState(false);
  const divRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setProfileContentShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div>
      <div
        className="cursor-pointer  relative"
        onClick={() => setProfileContentShow(!profileContentShow)}
        ref={divRef}
      >
        <BiDotsHorizontalRounded className="text-heading dark:text-darkHeading text-xl " />

        <div className="absolute top-full right-0 duration-300 z-50">
          {profileContentShow && <ProfileToggle />}
        </div>
      </div>
    </div>
  );
};

export default ToggleContent;
