"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { BsBuildings, BsStar } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { BiMessageAltDetail, BiUserCircle } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

const SidebarMenuItems = () => {
  const menuItems = [
    {
      id: 1,
      icons: <RxDashboard className="text-xl" />,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icons: <BsBuildings className="text-xl" />,
      text: "Property",
      link: "/property",
    },
    {
      id: 3,
      icons: <LuUsers className="text-xl" />,
      text: "Agent",
      link: "/agent",
    },
    {
      id: 4,
      icons: <BsStar className="text-xl" />,
      text: "Reviews",
      link: "/reviews",
    },
    {
      id: 5,
      icons: <BiMessageAltDetail className="text-xl" />,
      text: "Message",
      link: "/message",
    },
    {
      id: 6,
      icons: <BiUserCircle className="text-xl" />,
      text: "My Profile",
      link: "/profile",
    },
  ];

  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.link}
            className="flex items-center gap-[10px] text-text text-base font-medium py-[16px] px-[23px]"
          >
            <span> {item.icons}</span> {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenuItems;
