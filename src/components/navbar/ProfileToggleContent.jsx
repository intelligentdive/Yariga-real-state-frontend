"use client";

import Link from "next/link";
import { BiSolidUserCircle, BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ProfileToggleContent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ul className="w-[192px] bg-[#fcfcfc] dark:bg-[#1A1D1F]  rounded-lg p-[10px] shadow-xl">
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-[#808191] text-sm font-medium hover:text-main hover:font-semibold"
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
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-[#808191] text-sm font-medium hover:text-main hover:font-semibold"
        >
          <IoLogOut className="text-xl" />
          Log Out
        </Link>
      </li>
      <li className="p-[10px]">
        <button
          onClick={(e) =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className={
            "flex items-center gap-[10px] text-[#808191] text-sm font-medium hover:text-main hover:font-semibold"
          }
        >
          {theme === "dark" ? (
            <BiToggleLeft className="text-xl text-main" />
          ) : (
            <BiToggleRight className="text-xl" />
          )}
          Dark Mode
        </button>
      </li>
    </ul>
  );
};

export default ProfileToggleContent;
