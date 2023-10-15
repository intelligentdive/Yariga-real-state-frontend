import Link from "next/link";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";

const ProfileToggle = () => {
  return (
    <ul className="w-[192px] bg-[#fcfcfc] dark:bg-[#1A1D1F]  rounded-lg p-[10px] shadow-xl">
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-main text-sm font-medium hover:text-main hover:font-semibold"
        >
          <BiSolidUserCircle className="text-xl" />
          Edit Profile
        </Link>
      </li>
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-[#808191] text-sm font-medium hover:text-main hover:font-semibold"
        >
          <RiSettings3Fill className="text-xl" />
          Settings
        </Link>
      </li>
    </ul>
  );
};

export default ProfileToggle;
