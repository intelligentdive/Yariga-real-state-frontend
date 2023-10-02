import Link from "next/link";
import { BiSolidUserCircle, BiToggleRight } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const ProfileToggleContent = () => {
  return (
    <ul className="w-[192px] bg-white rounded-lg p-[10px] shadow-xl">
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-text text-sm font-medium hover:text-main hover:font-semibold"
        >
          <BiSolidUserCircle className="text-xl" />
          Edit Profile
        </Link>
      </li>
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-text text-sm font-medium hover:text-main hover:font-semibold"
        >
          <RiSettings3Fill className="text-xl" />
          Settings
        </Link>
      </li>
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-text text-sm font-medium hover:text-main hover:font-semibold"
        >
          <IoLogOut className="text-xl" />
          Log Out
        </Link>
      </li>
      <li className="p-[10px]">
        <Link
          href="#"
          className="flex items-center gap-[10px] text-text text-sm font-medium hover:text-main hover:font-semibold"
        >
          <BiToggleRight className="text-xl" />
          Dark Mode
        </Link>
      </li>
    </ul>
  );
};

export default ProfileToggleContent;
